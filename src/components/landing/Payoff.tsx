import { landingContent } from "@/content/landing";
import styles from "./landing.module.css";

export function Payoff() {
  const { payoff } = landingContent;

  return (
    <section className={styles.section} aria-labelledby="payoff-title">
      <div className={styles.container}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{payoff.eyebrow}</p>
          <h2 id="payoff-title" className={styles.sectionTitle}>
            {payoff.title}
          </h2>
        </div>
        <div className={styles.comparisonGrid}>
          <article className={styles.expertCard}>
            <h3>{payoff.expertLabel}</h3>
            <p>{payoff.expert}</p>
          </article>
          <article className={styles.learnerCard}>
            <h3>{payoff.learnerLabel}</h3>
            <p>{payoff.learner}</p>
          </article>
        </div>
        <p className={styles.payoffPromise}>{payoff.promise}</p>
      </div>
    </section>
  );
}
