import React from "react";
import "./Pages.css";

function About() {
  return (
    <div className="main-page">
      <h1 className="main-title">About</h1>
      <div className="info row-one">
        <p className="info-item info-text">
          My name is Cedric Pulmano, a second year computer science student at
          the University of British Columbia. I started at UBC in 2021, and plan
          to graduate in 2025. I have been programming since high school.
        </p>
        <div className="info-item info-figure">
          <img
            className="info-img ubc"
            src="./images/ubc-logo.jpg"
            alt="UBC"
          ></img>
          <h3 className="info-caption">My School</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
