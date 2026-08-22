import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const successMessage = "You’re on the list. We’ll email the cheat sheet when it’s ready.";

type ResendError = {
  type?: unknown;
};

async function getResendErrorType(response: Response) {
  try {
    const body = (await response.json()) as ResendError;
    return typeof body.type === "string" ? body.type : "unknown_error";
  } catch {
    return "unknown_error";
  }
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? (body as { email?: unknown }).email
      : undefined;

  if (typeof email !== "string" || !emailPattern.test(email.trim())) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const segmentId = process.env.RESEND_SEGMENT_ID;

  if (!apiKey || !segmentId) {
    console.error("Resend signup is missing required environment variables.");
    return NextResponse.json(
      { message: "Sign-up is temporarily unavailable. Please try again shortly." },
      { status: 503 },
    );
  }

  const normalizedEmail = email.trim().toLowerCase();
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  try {
    const createResponse = await fetch(`${RESEND_API_URL}/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        email: normalizedEmail,
        unsubscribed: false,
        segments: [{ id: segmentId }],
      }),
      cache: "no-store",
    });

    if (createResponse.ok) {
      return NextResponse.json({ message: successMessage });
    }

    const createErrorType = await getResendErrorType(createResponse);
    const segmentResponse = await fetch(
      `${RESEND_API_URL}/contacts/${encodeURIComponent(normalizedEmail)}/segments/${encodeURIComponent(segmentId)}`,
      {
        method: "POST",
        headers,
        cache: "no-store",
      },
    );

    if (segmentResponse.ok) {
      return NextResponse.json({ message: successMessage });
    }

    const segmentErrorType = await getResendErrorType(segmentResponse);
    console.error("Resend signup failed.", {
      createStatus: createResponse.status,
      createErrorType,
      segmentStatus: segmentResponse.status,
      segmentErrorType,
    });
  } catch (error) {
    console.error("Resend signup request failed.", {
      error: error instanceof Error ? error.name : "unknown_error",
    });
  }

  return NextResponse.json(
    { message: "We couldn’t complete your sign-up. Please try again." },
    { status: 502 },
  );
}
