import React, { useState, useEffect } from "react";
import styles from "./calendarDay.module.css";

export default function CalendarDay({
  day,
  image,
  temp,
  selected,
  onClick,
  isDisabled = false,
}) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (!isDisabled && typeof image === "string") {
      import(`../../../assets/${image}.png`).then((module) => {
        setImgSrc(module.default);
      });
    } else {
      setImgSrc(null);
    }
  }, [image, isDisabled]);

  return (
    <div
      className={`${styles.container} ${selected ? styles.selected : ""} ${
        isDisabled ? styles.disabled : ""
      }`}
      onClick={!isDisabled ? onClick : undefined}
    >
      <p className={styles.day}>{day}</p>
      {!isDisabled && imgSrc && (
        <img src={imgSrc} alt="weather icon" className={styles.image} />
      )}
      <div className={styles.weather}>
        {!isDisabled && (
          <>
            <p className={styles.weatherTemp}>{image}</p>
            <p className={styles.temp}>{temp}°C</p>
          </>
        )}
      </div>
    </div>
  );
}