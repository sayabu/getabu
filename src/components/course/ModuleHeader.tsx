import Image from "next/image";
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
        <div className={styles.headerContent}>
          <div className={styles.headerCopy}>
            <h1>{title}</h1>
            <p className={styles.moduleMeta}>{meta}</p>
          </div>
          <div className={styles.headerImageFrame}>
            <Image
              className={styles.headerImage}
              src="/images/course/6g-hero.png"
              alt="A large 6G sculpture surrounded by a satellite, drone, smart glasses, antenna array, AI chip, and construction equipment."
              width={1254}
              height={1254}
              sizes="(max-width: 720px) 320px, (max-width: 1000px) 300px, 390px"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
