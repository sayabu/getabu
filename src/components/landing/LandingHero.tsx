import Image from "next/image";
import Link from "next/link";
import { landingContent } from "@/content/landing";
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
          <div className={styles.heroImageFrame}>
            <Image
              className={styles.heroImage}
              src="/images/landing/hero-6g.png"
              alt={hero.imageAlt}
              width={1536}
              height={1024}
              sizes="(max-width: 900px) calc(100vw - 40px), 54vw"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
