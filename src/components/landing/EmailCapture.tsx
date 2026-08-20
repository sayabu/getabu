"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import styles from "./landing.module.css";

type EmailCaptureProps = {
  buttonLabel: string;
  compact?: boolean;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function EmailCapture({ buttonLabel, compact = false }: EmailCaptureProps) {
  const emailId = useId();
  const statusId = useId();
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.get("email") }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage(result.message ?? "Thanks. You're all set.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form
      className={`${styles.emailForm} ${compact ? styles.emailFormCompact : ""}`}
      onSubmit={handleSubmit}
      aria-describedby={statusId}
    >
      <label className={styles.srOnly} htmlFor={emailId}>
        Email address
      </label>
      <div className={styles.emailControls}>
        <input
          id={emailId}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
          disabled={status === "submitting"}
        />
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : buttonLabel}
        </button>
      </div>
      <p
        id={statusId}
        className={`${styles.formStatus} ${status === "error" ? styles.formStatusError : ""}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
