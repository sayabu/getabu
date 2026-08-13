"use client";

import { useEffect, useRef, useState } from "react";
import { localProgressStore } from "@/lib/progress-storage";
import styles from "./course.module.css";

type ReadingProgressProps = {
  moduleId: string;
};

export function ReadingProgress({ moduleId }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const highWaterMark = useRef(0);

  useEffect(() => {
    const savedProgress = localProgressStore.get(moduleId);
    highWaterMark.current = savedProgress;

    const updateProgress = () => {
      const maximumScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = maximumScroll <= 0 ? 100 : (window.scrollY / maximumScroll) * 100;
      const nextProgress = Math.min(
        100,
        Math.max(highWaterMark.current, Math.round(currentProgress)),
      );
      highWaterMark.current = nextProgress;
      setProgress(nextProgress);
      localProgressStore.set(moduleId, nextProgress);
    };

    const initialFrame = window.requestAnimationFrame(updateProgress);
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [moduleId]);

  return (
    <div
      className={styles.progressTrack}
      role="progressbar"
      aria-label="Module reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
    >
      <span className={styles.progressBar} style={{ width: `${progress}%` }} />
      <span className={styles.srOnly}>{progress}% read</span>
    </div>
  );
}
