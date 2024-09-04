import React from 'react';
import styles from './Hr.module.css';

export const Hr = () => {
  return (
    <div className={styles.hrContainer}>
      <hr className={styles.line} />
      <span className={styles.diamond}></span>
    </div>
  );
}
