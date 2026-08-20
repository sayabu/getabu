import Link from "next/link";
import { landingContent, landingModules } from "@/content/landing";
import { getCourseModule } from "@/lib/module-catalog";
import styles from "./landing.module.css";

export function ModuleMap() {
  const { journey } = landingContent;

  return (
    <section className={`${styles.section} ${styles.moduleMap}`} aria-labelledby="journey-title">
      <div className={styles.container}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{journey.eyebrow}</p>
          <h2 id="journey-title" className={styles.sectionTitle}>
            {journey.title}
          </h2>
          <p>{journey.intro}</p>
        </div>
        <ol className={styles.moduleGrid}>
          {landingModules.map((module) => {
            const courseModule = getCourseModule(String(module.number));

            if (!courseModule) {
              return null;
            }

            return (
              <li key={module.number}>
                <Link className={styles.moduleCard} href={courseModule.href}>
                  <div className={styles.moduleCardTop}>
                    <span className={styles.moduleNumber}>Module {module.number}</span>
                    <span className={styles.moduleIcon} aria-hidden="true">
                      {module.icon}
                    </span>
                  </div>
                  <h3>{module.title}</h3>
                  <span className={styles.moduleTime}>{courseModule.estimatedMinutes} min →</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
