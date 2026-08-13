import type { ReactNode } from "react";
import styles from "./course.module.css";

type LessonProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Lesson({ id, title, children }: LessonProps) {
  return (
    <section className={styles.lesson} aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      <div className={styles.lessonBody}>{children}</div>
    </section>
  );
}
