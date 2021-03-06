import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.scss';

function LandingPage(){

    return <div className={styles.landingContainer}>
        <h1>Let's Get Started</h1>
        <Link to='/register' className={styles.btn}>Register</Link>
        <Link to='/login' className={styles.btn}>Login</Link>
    </div>
}

export default LandingPage;