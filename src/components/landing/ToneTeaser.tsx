import Image from "next/image";
import { landingContent } from "@/content/landing";
import styles from "./landing.module.css";

export function ToneTeaser() {
  const { teaser } = landingContent;

  return (
    <section className={styles.section} aria-labelledby="teaser-title">
      <div className={styles.narrowContainer}>
        <p className={styles.eyebrow}>{teaser.eyebrow}</p>
        <h2 id="teaser-title" className={styles.sectionTitle}>
          {teaser.title}
        </h2>
        <div className={styles.teaserImageFrame}>
          <Image
            className={styles.teaserImage}
            src="/images/landing/bat-pizza.png"
            alt={teaser.imageAlt}
            width={2048}
            height={2048}
            sizes="(max-width: 720px) calc(100vw - 40px), 560px"
          />
        </div>
        <div className={styles.analogyCard}>
          <span className={styles.analogyIcon} aria-hidden="true">
            🦇
          </span>
          <div>
            {teaser.analogy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className={styles.soundSmart} aria-label="Sound Smart in a Meeting example">
          <div className={styles.soundSmartQuote}>
            <p className={styles.soundSmartLabel}>🎤 Sound Smart in a Meeting</p>
            <blockquote>{teaser.soundSmart.quote}</blockquote>
          </div>
          <div className={styles.soundSmartClue}>
            <p>
              <strong>Plain-English clue:</strong> {teaser.soundSmart.clue}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
