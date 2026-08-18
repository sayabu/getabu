"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { courseModules } from "@/lib/module-catalog";
import { localProgressStore } from "@/lib/progress-storage";
import styles from "./course.module.css";

type ModuleSwitcherProps = {
  currentSlug: string;
};

export function ModuleSwitcher({ currentSlug }: ModuleSwitcherProps) {
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setCompletedModules(
        new Set(
          courseModules
            .filter((module) => localProgressStore.get(module.id) >= 90)
            .map((module) => module.slug),
        ),
      );
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <details className={styles.moduleSwitcher}>
      <summary className={styles.moduleSwitcherSummary}>
        <span>All 10 modules</span>
        <span className={styles.moduleSwitcherChevron} aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className={styles.moduleSwitcherMenu}>
        <ol className={styles.moduleSwitcherList}>
          {courseModules.map((module) => {
            const isCurrent = module.slug === currentSlug;
            const isCompleted = completedModules.has(module.slug);

            return (
              <li key={module.slug}>
                <Link
                  className={`${styles.moduleSwitcherLink} ${
                    isCurrent ? styles.moduleSwitcherLinkCurrent : ""
                  }`}
                  href={module.href}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  <span className={styles.moduleSwitcherNumber}>Module {module.number}</span>
                  <span className={styles.moduleSwitcherTitle}>{module.title}</span>
                  <span className={styles.moduleSwitcherMeta}>
                    {module.estimatedMinutes} min
                    {isCurrent ? <span>Current</span> : null}
                    {!isCurrent && isCompleted ? (
                      <span className={styles.moduleSwitcherComplete}>
                        <span aria-hidden="true">✓</span> Completed
                      </span>
                    ) : null}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </details>
  );
}
