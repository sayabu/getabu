import styles from "./course.module.css";

type SoundSmartProps = {
  quote: string;
  clue: string;
};

export function SoundSmart({ quote, clue }: SoundSmartProps) {
  return (
    <aside className={styles.soundSmart} aria-label="Sound Smart in a Meeting">
      <div className={styles.soundSmartQuote}>
        <h3>🎤 SOUND SMART IN A MEETING (WITHOUT THE UNNECESSARY POSTURING)</h3>
        <blockquote>{quote}</blockquote>
      </div>
      <div className={styles.soundSmartClue}>
        <span className={styles.soundSmartDivider} aria-hidden="true">•</span>
        <p><strong>Plain-English clue:</strong> {clue}</p>
      </div>
    </aside>
  );
}
