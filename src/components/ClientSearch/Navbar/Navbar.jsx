import React from 'react'
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate()
    const goToBookedEvents = () => {
        navigate("/bookedevents");
    } 
    const goHome = () => {
        navigate('/home');
    }
    return (
        <nav>
            <div className={styles.btnLogoGroup}>
                <h2>EventCast</h2>
                <button className={styles.colorbtn2} onClick={goToBookedEvents}>Booked Events</button>
            </div>
            <div>
                <button className={styles.transparentbtn} onClick={goHome}>Home</button>
                <button className={styles.transparentbtn}>Settings</button>
            </div>
        </nav>
    )
}

export default Navbar
