import React from 'react';
import styles from './styles.module.css';
import ReactLoading from 'react-loading';
function IsLoading() {
    return (
    <div id={styles.loadingback}>
        <div id={styles.loadingsection}>
           <ReactLoading type={'bubbles'} color={'#18bc9c'} height={15} width={80} className={styles.loadinganimation} />
           <ReactLoading type={'bubbles'} color={'#18bc9c'} height={15} width={80} className={styles.loadinganimation}/>
           <ReactLoading type={'bubbles'} color={'#18bc9c'} height={15} width={80} className={styles.loadinganimation}/>
        </div>
    </div>
    )
}

export default IsLoading
