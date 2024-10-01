import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Hr } from "../HR/Hr";

const Contact = () => {
  return (
    <>
      <footer className={styles.footer}>
        <h2 className={styles.heading}>Get in Touch</h2>
         <p className={styles.description}>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
         <div className={styles.contactInfo}>
          <a href="mailto:shivam.79315@gmail.com" className={styles.email}>
          <FontAwesomeIcon icon={faEnvelope} /> &nbsp;shivam.79315@gmail.com
          </a>
          <a href="tel:+919805179315" className={styles.phone}>
          <FontAwesomeIcon icon={faPhone} /> &nbsp;9805179315
          </a>
          <a href="#" className={styles.location}>
          <FontAwesomeIcon icon={faLocationArrow} />&nbsp; Mohali
          </a>
        </div>
        {/* <div className={styles.socialMedia}>
          <a href="https://linkedin.com" className={styles.socialLink}>
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com" className={styles.socialLink}>
            <img src="/icons/github.svg" alt="GitHub" />
          </a>
          <a href="https://twitter.com" className={styles.socialLink}>
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
        </div> */}
      </footer>
    </>
  );
};

export default Contact;
