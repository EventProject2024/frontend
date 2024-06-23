import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import CalendarDay from "../../components/BookAnEvent/CalendarDay/dayComponent";
import Navbar from "../../components/BookAnEvent/Navbar/Navbar";

function BookAnEvent() {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weatherIcons = ["sunny", "cloud", "ranyWSun", "raining", "cloudy"];

  const generateRandomWeatherData = () => {
    return Array.from({ length: 35 }, (_, index) => {
      const day = (index + 28) % 31 + 1;
      const isDisabled = index < 3 || index >= 32;
      const randomWeather = weatherIcons[Math.floor(Math.random() * weatherIcons.length)];
      const randomTemp = Math.floor(Math.random() * 16) + 15; // Random temp between 15 and 30

      return {
        day,
        image: !isDisabled ? randomWeather : null,
        temp: !isDisabled ? randomTemp : null,
        isDisabled,
      };
    });
  };

  const [calendarData, setCalendarData] = useState(generateRandomWeatherData());
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayClick = (day) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((selectedDay) => selectedDay !== day)
        : [...prevSelectedDays, day]
    );
  };

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.wrapper}>
      <div className={styles.selector}>
          <p>Monday, 8 February</p>
          <p>Description</p>
          <p>Location</p>
          <p>Mail</p>
          <div className={styles.photo}>

          </div>
      </div>
      <div className={styles.input_box}>
        <div className={styles.calendar}>
          <div className={styles.dayNamesContainer}>
            <div className={styles.weekNumberPlaceholder}></div>
            {dayNames.map((name, index) => (
              <div key={index} className={styles.dayName}>
                {name}
              </div>
            ))}
          </div>
          <div className={styles.inputBox}>
            {calendarData.map(({ day, image, temp, isDisabled }, index) => (
              <React.Fragment key={index}>
                {index % 7 === 0 && (
                  <div className={styles.weekNumber}>
                    {Math.floor(index / 7) + 1}
                  </div>
                )}
                <CalendarDay
                  day={day}
                  image={image}
                  temp={temp}
                  selected={selectedDays.includes(day)}
                  onClick={() => handleDayClick(day)}
                  isDisabled={isDisabled}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default BookAnEvent;