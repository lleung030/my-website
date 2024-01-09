import React from 'react';
import Me from '../../image/ME.png';
import styles from './page.module.css'; // Import your stylesheet
import Image from 'next/image';

export default function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Software Engineer
        </h1>
        <p className={styles.description}>
          A passion for learning, developing, and for God.
        </p>
      </div>
      <Image src={Me} alt="" className={styles.imageContainer} />
    </div>
  );
}
