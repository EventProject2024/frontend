import React from 'react'
import styles from './styles.module.css';
function Navbar() {
    return (
        <nav>
            <div className={styles.btnLogoGroup}>
                <h2>EventCast</h2>
                <button className={styles.colorbtn2}>Booked Events</button>
            </div>
            <div>
                <button className={styles.transparentbtn}>Home</button>
                <button className={styles.transparentbtn}>Settings</button>
            </div>
        </nav>
    )
}

export default Navbar
