import React from "react";
import styles from "./CV.module.css";
import { ResumeHead } from "../Head/ResumeHead";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Nav from "../Nav/Nav";
import { Hr } from "../HR/Hr";
import Projects from "../Projects/Projects";

const CV = () => {
  return (
    <>
      <div className={styles.cvContainer}>
        <Nav />
        <ResumeHead />
        <Education />
        <Skills />
        <Projects />
      </div>
    </>
  );
};

export default CV;
