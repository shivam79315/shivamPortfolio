import React from "react";
import styles from "./Projects.module.css";
import { Hr } from "../HR/Hr";
import movieImg from '../../assets/images/movieFlix.webp';
import portfolioImg from '../../assets/images/portfolio.webp';
import expenseTrackerImg from '../../assets/images/ExpenseTrackerImg.webp';
import projectSampleImage from '../../assets/images/projectImageSample.jpg'

const projectList = [
  {
    title: "_",
    image: portfolioImg,
    url: "https://shivam-portfolio-flame.vercel.app/",
  },
  {
    title: "Expense Tracker",
    image: expenseTrackerImg,
    url: "https://expense-tracker-indol-five.vercel.app/",
  },
  {
    title: "_",
    image: movieImg,
    url: "https://imdb-clone-ten-blond.vercel.app/",
  },
];

const Projects = () => {
  return (
    <>
      <div className={styles.projectContainer}>
        <Hr />
        <h2 className={styles.heading}>My Works</h2>
        <p className={styles.description}>
          Here are a few projects developed using React and Vanilla JavaScript,
          reflecting my passion for web development and creating engaging user
          experiences.
        </p>

        <div className={styles.projectsContainer}>
          <div className={styles.projectsScroll}>
            {projectList.map((project, index) => (
              <div className={styles.projectCard} key={index}>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.title} />
                  <div className={styles.overlay}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <button className={styles.arrowBtn}>→</button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
