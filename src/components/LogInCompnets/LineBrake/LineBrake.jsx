import styles from "./styles.module.css";

export default function LineBrake({ text }) {
  return (
    <div className={styles.line_with_text}>
      <hr className={styles.line} />
      <h3 className={styles.heading}>{text}</h3>
      <hr className={styles.line} />
    </div>
  );
}
