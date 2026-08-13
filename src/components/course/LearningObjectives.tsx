import styles from "./course.module.css";

type LearningObjectivesProps = {
  items: string[];
};

export function LearningObjectives({ items }: LearningObjectivesProps) {
  return (
    <section className={styles.objectives} aria-labelledby="learning-objectives-title">
      <p className={styles.eyebrow}>Module roadmap</p>
      <h2 id="learning-objectives-title">What You&apos;ll Learn</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
