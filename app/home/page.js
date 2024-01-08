
import styles from './page.module.css'
import Footer from '../(components)/Footer/Footer.jsx';
import React from 'react';


export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.stackedwaves}></div>
      <h1 className={styles.big}>Welcome to My Portfolio!</h1>
      <div className={styles.stackedwavesflip}></div>
      <div className={styles.aboutsitecontainer}>
        <div className={styles.big}></div>
        <div className={styles.description}></div>
      </div>
      <div className={styles.stackedwaves}></div>
      <div className={styles.page}>
        {Array.from({ length: 10 }).map((_, index) => (
          <p key={index}>This is paragraph {index + 1}</p>
        ))}
      </div>
      <Footer />
    </div>
  )
}
