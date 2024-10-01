import React from "react";
import { Hr } from "../HR/Hr";
import styles from "./education.module.css";

const Education = () => {
  return (
    <>
      <Hr />

      <h2 className={`${styles.heading} text-center mb-5`}>Education</h2>
      <div className={styles.educationCard}>
        <div className={styles.scrollableContent}>
          <p className={styles.years}>2018</p>
          <h2 className={styles.title}>Matriculation in CBSE Board</h2>
          <p className={styles.universityName}>SVM High School Chintpurni</p>
          <p className={styles.description}>
            I successfully completed my 10th grade under the CBSE board with an
            overall score of 80%. My subjects included English, Hindi,
            Mathematics, Science, Social Science, Sanskrit, and Computer
            Science, providing a strong academic foundation across diverse
            disciplines.
          </p>
        </div>
        <div className={styles.scrollableContent}>
          <p className={styles.years}>2018-2020</p>
          <h2 className={styles.title}>12th in HP Board</h2>
          <p className={styles.universityName}>Govt. High School Bharwain</p>
          <p className={styles.description}>
            I completed my 12th grade in the Non-Medical stream under the CBSE
            board with an overall score of 85%. My subjects included Physics,
            Chemistry, Mathematics, English, and Computer Science, which
            provided a strong foundation in analytical and technical skills,
            preparing me for future studies in engineering and technology.
          </p>
        </div>
        <div className={styles.scrollableContent}>
          <p className={styles.years}>2020-2024</p>
          <h2 className={styles.title}>B.Tech in CSE</h2>
          <p className={styles.universityName}>IEC University Baddi</p>
          <p className={styles.description}>
            I completed my B.Tech in Computer Science and Engineering with a
            CGPA of 8.5. During my studies, I gained a strong foundation in core
            subjects like Data Structures, Algorithms, Database Management,
            Operating Systems, and Web Development. This academic journey
            equipped me with both theoretical knowledge and practical skills,
            preparing me for a career in software development and technology.
          </p>
        </div>
      </div>

      <Hr />
    </>
  );
};

export default Education;
