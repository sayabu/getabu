import type { ReactNode } from "react";
import { ReadingProgress } from "./ReadingProgress";
import styles from "./course.module.css";

type ModulePageProps = {
  moduleId: string;
  children: ReactNode;
};

export function ModulePage({ moduleId, children }: ModulePageProps) {
  return (
    <>
      <ReadingProgress moduleId={moduleId} />
      <main id="module-content" className={styles.modulePage}>
        {children}
      </main>
    </>
  );
}
