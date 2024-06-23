import React, { useState } from "react";
import styles from "./CalendarLayout.module.css";
import ScheduleColumn from "../AvalableHours/ScheduleColumn";

export default function CalendarLayout() {
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const weeks = Array.from({ length: 4 }, (_, i) => i); 

  const initialTimeSlot = { startTime: "14:15", endTime: "15:00" };

  const initialState = daysOfWeek.reduce((acc, day) => {
    acc[day] = [initialTimeSlot];
    return acc;
  }, {});

  const [schedule, setSchedule] = useState(initialState);
  const [selectedDates, setSelectedDates] = useState([]);

  const addTimeSlot = (day) => {
    const updatedSchedule = {
      ...schedule,
      [day]: [...schedule[day], initialTimeSlot],
    };
    setSchedule(updatedSchedule);
  };

  const removeLastTimeSlot = (day) => {
    const updatedSchedule = {
      ...schedule,
      [day]: schedule[day].slice(0, -1),
    };
    setSchedule(updatedSchedule);
  };

  const updateTimeSlot = (day, index, field, newValue) => {
    const updatedSchedule = {
      ...schedule,
      [day]: schedule[day].map((timeSlot, i) =>
        i === index ? { ...timeSlot, [field]: newValue } : timeSlot
      ),
    };
    setSchedule(updatedSchedule);
  };

  const handleDateClick = (day, weekIndex, e) => {
    if (e.shiftKey) {
      const weekDays = daysOfWeek.map(d => `${d}-${weekIndex}`);
      setSelectedDates((prevSelected) =>
        weekDays.every(date => prevSelected.includes(date))
          ? prevSelected.filter(date => !weekDays.includes(date))
          : [...new Set([...prevSelected, ...weekDays])]
      );
    } else {
      setSelectedDates([`${day}-${weekIndex}`]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          Schedule for{" "}
          {selectedDates.length
            ? selectedDates.map(date => date.split('-')[0]).join(", ")
            : "Select a day"}
        </div>
        {selectedDates.map((selectedDate) => {
          const [day, weekIndex] = selectedDate.split("-");
          return (
            <ScheduleColumn
              key={`${day}-${weekIndex}`}
              day={day}
              schedule={schedule[day]}
              addTimeSlot={addTimeSlot}
              removeLastTimeSlot={removeLastTimeSlot}
              updateTimeSlot={updateTimeSlot}
            />
          );
        })}
      </div>
      <div className={styles.calendar}>
        <div className={styles.calendarHeader}>
          <button className={styles.arrowButton}>{"<"}</button>
          <span>February 2021</span>
          <button className={styles.arrowButton}>{">"}</button>
        </div>
        <div className={styles.calendarDays}>
          {daysOfWeek.map((day) => (
            <div key={day} className={styles.calendarDay}>
              <span>{day}</span>
            </div>
          ))}
        </div>
        <div className={styles.calendarGrid}>
          {weeks.map((_, weekIndex) =>
            daysOfWeek.map((day, dayIndex) => (
              <div
                key={`${day}-${weekIndex}`}
                className={`${styles.calendarDate} ${
                  selectedDates.includes(`${day}-${weekIndex}`) ? styles.selectedDate : ""
                }`}
                onClick={(e) => handleDateClick(day, weekIndex, e)}
              >
                {weekIndex * 7 + dayIndex + 1}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}