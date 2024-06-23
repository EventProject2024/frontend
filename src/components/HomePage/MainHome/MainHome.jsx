import React from 'react'
import styles from './styles.module.css';
import {useNavigate} from 'react-router-dom';
function MainHome() {
    const navigate = useNavigate();

    const goToClient = () => {
        navigate('/clientsearch');
    }
    return (
        <div id={styles.homecontainer}>
            <div id={styles.leftWrapper}>
                <div className={styles.designParts} id={styles.topDesign}>
                    .
                </div>
                <div className={`${styles.linksParts} ${styles.firstform} ${styles.oneColor}`}>
                    <p>Weather Forecast</p>
                </div>
                <div className={`${styles.linksParts} ${styles.secondform} ${styles.secColor}`}>
                    <p>Dashbord overview</p>
                </div>
                <div className={`${styles.linksParts} ${styles.firstform} ${styles.thirdColor}`}>
                    <p>Top Contributors</p>
                </div>
                <div className={`${styles.linksParts} ${styles.secondform} ${styles.thirdColor}`}>
                    <p>What's new?</p>
                </div>
                <div className={`${styles.linksParts} ${styles.firstform} ${styles.secColor}`} onClick={goToClient}>
                    <p>Search</p>
                </div>
                <div className={`${styles.linksParts} ${styles.secondform} ${styles.oneColor}`}>
                    <p>Change Page</p>
                </div>
                <div className={styles.designParts} id={styles.bottomDesign}>
                    .
                </div>
            </div>
            <div id={styles.rightContainer}>
                <div id={styles.titleContainer}>
                    <p>Hi! Engage, innovate or organize.
                        Get started now.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainHome
