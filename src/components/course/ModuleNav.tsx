import Link from "next/link";
import { getAdjacentModules, getCourseModule } from "@/lib/module-catalog";
import { ModuleSwitcher } from "./ModuleSwitcher";
import styles from "./course.module.css";

type JumpLink = {
  label: string;
  href: string;
};

type ModuleNavProps = {
  position: "top" | "bottom";
  moduleNumber: number;
  completion?: string;
  jumpLinks?: JumpLink[];
};

export function ModuleNav({ position, moduleNumber, completion, jumpLinks = [] }: ModuleNavProps) {
  const currentSlug = String(moduleNumber);
  const current = getCourseModule(currentSlug);
  const { previous, next } = getAdjacentModules(currentSlug);

  if (!current) {
    return null;
  }

  return (
    <nav
      className={`${styles.moduleNav} ${
        position === "top" ? styles.moduleNavTop : styles.moduleNavBottom
      }`}
      aria-label={`${position === "top" ? "Top" : "Bottom"} module navigation`}
    >
      <div className={styles.navPrimary}>
        <h2 className={styles.navTitle}>🧭 NAVIGATION</h2>
        <div className={styles.navRouteRow}>
          {previous ? (
            <Link href={previous.href}>
              {position === "bottom" ? "◀ Back: " : ""}
              Module {previous.number}: {previous.shortTitle}
            </Link>
          ) : (
            <span>Start here!</span>
          )}
          <span className={styles.currentModule}>
            You are here: {current.currentLabel ?? `Module ${current.number}`}
          </span>
          {next ? (
            <Link href={next.href}>
              {position === "bottom" ? "Next: " : ""}
              Module {next.number}: {next.shortTitle} ▶
            </Link>
          ) : null}
          {completion ? <span>{completion}</span> : null}
        </div>
        <ModuleSwitcher currentSlug={currentSlug} />
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
