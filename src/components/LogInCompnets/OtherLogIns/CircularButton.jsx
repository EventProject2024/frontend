import styles from "./styles.module.css"

export default function CircularButton({ imageSrc, altText, onClick }) {
    return (
      <button className={styles.circular_button} onClick={onClick}>
        <div className={styles.button_content}>
          <img src={imageSrc} alt={altText} className={styles.button_image} />
        </div>  
      </button>
    );
  }