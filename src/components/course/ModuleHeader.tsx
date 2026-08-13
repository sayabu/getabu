import styles from "./course.module.css";

type ModuleHeaderProps = {
  title: string;
  meta: string;
};

export function ModuleHeader({ title, meta }: ModuleHeaderProps) {
  return (
    <header className={styles.moduleHeader}>
      <div className={styles.headerBlobSky} aria-hidden="true" />
      <div className={styles.headerBlobSun} aria-hidden="true" />
      <div className={styles.headerInner}>
        <div className={styles.brandMark} aria-label="6G Fundamentals">
          <span aria-hidden="true">6G</span>
        </div>
        <h1>{title}</h1>
        <p className={styles.moduleMeta}>{meta}</p>
      </div>
    </header>
  );
}
