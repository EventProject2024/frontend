import React from 'react'
import styles from './styles.module.css';
function Navbar() {
    return (
        <nav>
            <div className={styles.btnLogoGroup}>
                <h2>EventCast</h2>
                <div>
                    <button  className={styles.colorbtn2}>Booked Events</button>
                    <button  className={styles.colorbtn2}>Event Types</button>
                </div>
            </div>
            <div className={styles.btnGroup}>
                <button className={styles.transparentbtn}>Home</button>
                <button className={styles.transparentbtn}>Search</button>
                <button className={styles.transparentbtn}>Settings</button>
                <button className={styles.colorbtn}>Create Event</button>
            </div>
        </nav>
    )
}

export default Navbar
