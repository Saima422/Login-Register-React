import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Footer(){

    return (
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <div className={styles.socialIcons}>
                <FontAwesomeIcon icon={faFacebookSquare} size='lg' className={styles.icon}/>
                <FontAwesomeIcon icon={faInstagramSquare} size='lg' className={styles.icon}/>
                <FontAwesomeIcon icon={faTwitterSquare} size='lg' className={styles.icon}/>
                <FontAwesomeIcon icon={faLinkedin} size='lg' className={styles.icon}/>
                </div>
            </div>  
        </footer>
    ) 
}

export default Footer;