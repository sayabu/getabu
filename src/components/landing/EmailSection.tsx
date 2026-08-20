import { landingContent } from "@/content/landing";
import { EmailCapture } from "./EmailCapture";
import styles from "./landing.module.css";

export function EmailSection() {
  const { email } = landingContent;

  return (
    <section className={styles.emailSection} aria-labelledby="email-title">
      <div className={`${styles.container} ${styles.emailGrid}`}>
        <div>
          <p className={styles.eyebrow}>{email.eyebrow}</p>
          <h2 id="email-title" className={styles.sectionTitle}>
            {email.title}
          </h2>
          <p className={styles.emailCopy}>{email.copy}</p>
        </div>
        <div>
          <EmailCapture buttonLabel={email.button} />
          <p className={styles.finePrint}>{email.finePrint}</p>
        </div>
      </div>
    </section>
  );
}
