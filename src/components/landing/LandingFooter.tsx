import Link from "next/link";
import { landingContent } from "@/content/landing";
import { EmailCapture } from "./EmailCapture";
import styles from "./landing.module.css";

export function LandingFooter() {
  const { footer } = landingContent;

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerGrid}`}>
        <div>
          <h2>{footer.title}</h2>
          <Link className={styles.primaryButton} href="/modules/1">
            {footer.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div>
          <p className={styles.footerEmailCopy}>{footer.emailCopy}</p>
          <EmailCapture buttonLabel="Send Me the Cheat Sheet" compact />
        </div>
      </div>
      <div className={`${styles.container} ${styles.footerBottom}`}>
        <span>6G Fundamentals</span>
        <nav aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/">Course Home</Link>
        </nav>
      </div>
    </footer>
  );
}
