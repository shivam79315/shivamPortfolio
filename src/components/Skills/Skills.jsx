import React from "react";
import styles from "./Skills.module.css";
import Nav from "../Nav/Nav";

const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "80%" },
  { name: "HTML5", level: "85%" },
  { name: "CSS3", level: "85%" },
  { name: "React", level: "70%" },
  { name: "Node.js", level: "60%" },
  { name: "Git", level: "80%" },
];

const Skills = () => {
  return (
    <>
      <div className={styles.skillsSection}>
        {/* <Nav /> */}
        <h2 className={styles.heading}>My Skills</h2>
        <p className={styles.description}>
          Here are the skills that drive my passion for web development and
          shape my commitment to creating exceptional web experiences:
        </p>
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillName}>
                {skill.name}{" "}
                <span className={styles.skillLevel}>{skill.level}</span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
