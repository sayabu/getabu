import Link from "next/link";
import { aboutContent } from "@/content/about";
import { ImagePlaceholder } from "./ImagePlaceholder";
import styles from "./landing.module.css";

export function AboutPage() {
  return (
    <main id="main-content" className={styles.aboutPage}>
      <div className={styles.aboutBlob} aria-hidden="true" />
      <div className={styles.container}>
        <Link className={styles.aboutBackLink} href="/">
          ← Course Home
        </Link>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutCopy}>
            <p className={styles.eyebrow}>{aboutContent.eyebrow}</p>
            <h1>{aboutContent.title}</h1>
            <div className={styles.aboutTextCard}>
              {aboutContent.blocks.map((block) => (
                <p key={block}>{block}</p>
              ))}
            </div>
          </div>
          <ImagePlaceholder
            label={aboutContent.imageLabel}
            description={aboutContent.imageDescription}
          />
        </div>
      </div>
    </main>
  );
}
