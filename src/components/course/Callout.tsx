import type { ReactNode } from "react";
import styles from "./course.module.css";

type CalloutProps = {
  variant: "terminology" | "takeaway";
  children: ReactNode;
};

const calloutLabels = {
  terminology: "📌 QUICK TERMINOLOGY NOTE",
  takeaway: "💡 KEY TAKEAWAY",
};

export function Callout({ variant, children }: CalloutProps) {
  return (
    <aside className={`${styles.callout} ${styles[variant]}`} aria-label={calloutLabels[variant]}>
      <h3>{calloutLabels[variant]}</h3>
      <div>{children}</div>
    </aside>
  );
}
