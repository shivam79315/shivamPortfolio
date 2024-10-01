import React from 'react';
import styles from './Resume.module.css';

export const ResumeHead = () => {
  return (
    <>
      <h2 className={`${styles.head} text-center`}>Shivam</h2>
      <span className={` ${styles.details}`}>9805179315 | shivam.79315@gmail.com</span>
    </>
  );
}
