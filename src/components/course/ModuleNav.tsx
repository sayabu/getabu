import Link from "next/link";
import styles from "./course.module.css";

type JumpLink = {
  label: string;
  href: string;
};

type ModuleNavProps = {
  position: "top" | "bottom";
  previous?: { label: string; href: string };
  current?: string;
  next: { label: string; href: string };
  jumpLinks?: JumpLink[];
};

export function ModuleNav({ position, previous, current, next, jumpLinks = [] }: ModuleNavProps) {
  return (
    <nav className={styles.moduleNav} aria-label={`${position === "top" ? "Top" : "Bottom"} module navigation`}>
      <h2 className={styles.navTitle}>🧭 NAVIGATION</h2>
      <div className={styles.navRouteRow}>
        {previous ? (
          <Link href={previous.href}>{position === "bottom" ? "◀ " : ""}{previous.label}</Link>
        ) : (
          <span>Start here!</span>
        )}
        {current ? <span className={styles.currentModule}>You are here: {current}</span> : null}
        <Link href={next.href}>{next.label} ▶</Link>
      </div>
      {jumpLinks.length > 0 ? (
        <div className={styles.jumpLinks}>
          <span>Jump to:</span>
          {jumpLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
