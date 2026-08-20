import Link from "next/link";
import { landingContent } from "@/content/landing";
import { ImagePlaceholder } from "./ImagePlaceholder";
import styles from "./landing.module.css";

export function LandingHero() {
  const { hero } = landingContent;

  return (
    <header className={styles.hero}>
      <div className={styles.heroBlobSky} aria-hidden="true" />
      <div className={styles.heroBlobSun} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className={styles.heroLede}>{hero.lede}</p>
            <p className={styles.statLine}>{hero.stats}</p>
            <Link className={styles.primaryButton} href="/modules/1">
              {hero.cta} <span aria-hidden="true">→</span>
            </Link>
            <p className={styles.aboutTeaser}>
              {hero.aboutTeaser}{" "}
              <Link href="/about">{hero.aboutLink} →</Link>
            </p>
          </div>
          <ImagePlaceholder
            label="IMAGE L1"
            description="Hero illustration for the 6G Fundamentals tutorial"
          />
        </div>
      </div>
    </header>
  );
}
