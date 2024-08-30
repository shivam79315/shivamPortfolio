import React from "react";
import logo from "../assets/images/logo.jpeg";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="left">
          <img src={logo} alt="Logo" />
          <span className="title">Shivam's Portfolio</span>
        </div>
        <div className="right">
          <ul className="menuList">
            <li>Certificates</li>
            <li>Linkedin</li>
            <li>CV</li>
            <li>E-Mail</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
