"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./course.module.css";

type FigureProps = {
  id: string;
  src: string;
  alt: string;
};

export function Figure({ id, src, alt }: FigureProps) {
  const [missing, setMissing] = useState(false);

  return (
    <figure className={styles.figure}>
      <div className={styles.figureFrame}>
        {missing ? (
          <div className={styles.figurePlaceholder} role="img" aria-label={alt}>
            <span>IMAGE {id}</span>
            <small>Teaching figure coming soon</small>
          </div>
        ) : (
          <Image
            className={styles.figureImage}
            src={src}
            alt={alt}
            width={1200}
            height={675}
            sizes="(max-width: 820px) 100vw, 760px"
            onError={() => setMissing(true)}
          />
        )}
      </div>
      <figcaption>Figure {id}</figcaption>
    </figure>
  );
}
