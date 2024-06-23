import React from 'react'
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/home');
    }
    const goToBookedEvents = () => {
        navigate('/bookedevents')
    }
    const goToClientSearch = () => {
        navigate('/clientsearch')
    }
    return (
        <nav>
            <div className={styles.btnLogoGroup}>
                <h2>EventCast</h2>
                <div>
                    <button className={styles.colorbtn2} onClick={goToBookedEvents}>Booked Events</button>
                    <button className={styles.colorbtn2}>Event Types</button>
                </div>
            </div>
            <div className={styles.btnGroup}>
                <button className={styles.transparentbtn} onClick={goHome}>Home</button>
                <button className={styles.transparentbtn} onClick={goToClientSearch}>Search</button>
                <button className={styles.transparentbtn}>Settings</button>
            </div>
        </nav>
    )
}

export default Navbar
