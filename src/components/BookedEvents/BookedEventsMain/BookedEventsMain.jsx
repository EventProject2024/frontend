import React from 'react';
import styles from './styles.module.css';
function BookedEventsMain() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.eventContainer}>
                <div className={styles.event}></div>
                <div className={styles.event}></div>
                <div className={styles.event}></div>
                <div className={styles.event}></div>
                <div className={styles.event}></div>
                <div className={styles.event}></div>
            </div>
            <div className={styles.eventContainer}>
                <div className={styles.event}></div>
                <div className={styles.event}></div>
                <div className={styles.event}></div>
                <div className={styles.event}></div>
                <div className={styles.event}></div>
                <div className={styles.event}></div>
            </div>
        </div>
    )
}

export default BookedEventsMain
