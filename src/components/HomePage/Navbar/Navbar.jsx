import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const toHome = () => {
        navigate('/home');
    }

    const toSettings = () => {
        navigate('/settings');
    }

    const toWeatherLab = () => {
        navigate('/weatherlab');
    }
    return (
        <>
            <nav>
                <h2>EventCast</h2>
                <div className={styles.btnGroup}>
                    <button onClick={toHome} className={styles.transparentbtn}>Home</button>
                    <button onClick={toSettings} className={styles.transparentbtn}>Settings</button>
                    <button onClick={toWeatherLab} className={styles.colorbtn}>Weather Lab</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
