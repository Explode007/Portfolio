import React from 'react';
import styles from './footer.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className={styles.wave}></div>
            


            <div className={styles.footerContent}>
                <p>© {new Date().getFullYear()} Portfolio of Samuel A. Maldonado. All Rights Reserved.</p>
                <div className={styles.socialMediaContainer}>
                    <a href="https://www.linkedin.com/in/your-profile" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/your-username" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Footer;