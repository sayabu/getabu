import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  return NextResponse.json({
    message: "Thanks — sign-up is in preview, so your email was not stored yet.",
  });
}
