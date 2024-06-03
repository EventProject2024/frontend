import React from 'react';
import { UilBars } from '@iconscout/react-unicons';
import { UilArrowUp } from '@iconscout/react-unicons';
import { UilArrowDown } from '@iconscout/react-unicons';
import styles from './styles.module.css';
function ClientSearchMain() {
    return (
        <div className={styles.container}>
            <div className={styles.upperContainer}>
                <UilBars className={styles.logo}/> 
                <input type="text" placeholder='Search...' className={styles.searchBar}/>
                <div className={styles.arrowContainer}> 
                    <UilArrowDown className={styles.logo1}/>
                    <UilArrowUp className={styles.logo2}/>                  
                </div>
            </div>
            <div className={styles.downContainer}>
                <div>
                    <p>(Name of service)</p>
                    <p>View</p>
                </div>
                <div>
                    <p>(Name of service)</p>
                    <p>View</p>
                </div>
                <div>
                    <p>(Name of service)</p>
                    <p>View</p>
                </div>
                <div>
                    <p>(Name of service)</p>
                    <p>View</p>
                </div>
                <div>
                    <p>(Name of service)</p>
                    <p>View</p>
                </div>
                <div>
                    <p>(Name of service)</p>
                    <p>View</p>
                </div>
            </div>
        </div>
    ) //sala intaniri subsol si sala conferinta mare
}

export default ClientSearchMain
