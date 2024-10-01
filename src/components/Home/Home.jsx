import React from "react";
import Nav from "../Nav/Nav";
import Introduction from "../Introduction/Introduction";
import styles from './Home.module.css';
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <Nav />
        <Introduction />
        <Contact />
      </div>
    </>
  );
};

export default Home;
