import React from "react";
import resume from "../../assets/pdf/shivamResume.pdf";
import profilePicture from "../../assets/images/profilePicture.png";
import { Hr } from "../HR/Hr";

const Introduction = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "shivamResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="introContainer">
        <div className="imageContainer">
          <div className="image" onClick={handleDownload}>
            <img src={profilePicture} alt="Profile Picture" />
            <div className="hoverText">
              <span>Resume </span>
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                width="24px"
                height="24px"
              >
                <path
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5
                12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 
                35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 
                352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                />
              </svg>
            </div>
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

      <Hr />

      <div className="profileOffering">
        <h2 className="profileTitle">Expert On</h2>
        <span className="profileDescription">
          i'm developer and UI/UX designer
        </span>

        <span className="profileOff">
          Hey are you looking for designer to build your brand and grow your
          business? let's shake hands with me.
        </span>

        <a className="cvBtn" href="#" onClick={handleDownload}>
          Download CV
        </a>
      </div>
    </>
  );
};

export default Introduction;
