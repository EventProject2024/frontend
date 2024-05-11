import React, { useState } from "react";
import styles from "./styles.module.css";

export default function CheckboxWithDescription({ label, description }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.checkbox_container}>
      <label className={styles.checkbox_label}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={styles.checkbox_input}
        />
        <span className={styles.checkmark}></span>
        <span className={styles.checkbox_text}>{label}</span>
      </label>
      <p className={styles.checkbox_description}>{description}</p>
    </div>
  );
}
