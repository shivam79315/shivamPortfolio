import React from 'react';
import styles from './Skelton.module.css'; // Import the CSS module

const Skeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={`${styles['card-img']} ${styles.skeleton}`}></div>
        <div className={styles['card-body']}>
          <h2 className={`${styles['card-title']} ${styles.skeleton}`}></h2>
          <p className={`${styles['card-intro']} ${styles.skeleton}`}></p>
          <p className={`${styles['card-intro']} ${styles.skeleton2}`}></p>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
