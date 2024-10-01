import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.jpeg";
import styles from './Nav.module.css'; 

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.nav}> 
      <div className={styles.left}> 
        <img src={logo} alt="Logo" />
        <span className={styles.title}>Shivam's Portfolio</span> 
      </div>
      <div className={styles.right}>
        {/* Menu button with aria-label for accessibility */}
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle navigation menu">
          ☰
        </button>
        <ul className={`${styles.menuList} ${isOpen ? styles.open : ''}`}>
          <li><Link to="/" className={styles.navLink}>Home</Link></li> 
          {/* <li><Link to="/skills" className={styles.navLink}>Skills</Link></li> */}
          <li><Link to="/certificates" className={styles.navLink}>Certificates</Link></li>
          <li><Link to="/cv" className={styles.navLink}>CV</Link></li>
          <li><Link to="/email" className={styles.navLink}>E-Mail</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
