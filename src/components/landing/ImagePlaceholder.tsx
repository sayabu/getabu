import styles from "./landing.module.css";

type ImagePlaceholderProps = {
  label: string;
  description: string;
};

export function ImagePlaceholder({ label, description }: ImagePlaceholderProps) {
  return (
    <div className={styles.imagePlaceholder} role="img" aria-label={description}>
      <span>{label}</span>
      <small>{description}</small>
    </div>
  );
}
