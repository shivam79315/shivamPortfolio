import React from "react";
import profilePicture from "../assets/images/profilePicture.png";

const Introduction = () => {
  return (
    <>
      <div className="introContainer">
        <div className="imageContainer">
          <div className="image">
            <img src={profilePicture} alt="Profile Picture" />
          </div>
        </div>
        <div className="wrapper">
          <div className="staticTxt">Hello, I'm a </div>
          <ul className="dynamicTxt">
            <li>
              <span>Designer</span>
            </li>
            <li>
              <span>Developer</span>
            </li>
            <li>
              <span>Freelancer</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Introduction;
