import React from 'react'
import styles from './styles.module.css'
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();

    const toLogIn = () => {
      navigate("/login");
    };
  
    const toRegister = () => {
      navigate("/register");
    };
  

    return (
        <nav>
            <h2>EventCast</h2>
            <div className={styles.btnGroup}>
                <button onClick={toRegister} className={styles.transparentbtn}>Sign in</button>
                <button onClick={toLogIn} className={styles.transparentbtn}>Login</button>
                <button className={styles.colorbtn}>Contact</button>
            </div>
        </nav>
    )
}

export default Navbar
