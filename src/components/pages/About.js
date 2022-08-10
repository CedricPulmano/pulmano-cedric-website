import React from "react";
import ImageFigure from "../ImageFigure";
import "./Pages.css";

function About() {
  return (
    <div className="main-page">
      <h1 className="main-title">About Me</h1>
      <div className="info-section intro">
        <p className="info-item info-text">
          My name is Cedric Pulmano, a second year computer science student at
          the University of British Columbia. I started at UBC in 2021, and plan
          to graduate in 2025. I have been programming since high school, and I
          am always aiming to learn new things!
        </p>
        <ImageFigure
          divClasses="info-item"
          imgClasses="ubc"
          imgsrc="./images/ubc-logo.jpg"
          imgalt="UBC"
          headerClasses="ubc-text"
          header="My School"
        />
      </div>
      <h1 className="main-title">Skills</h1>
      <div className="info-section skill-grid">
        <ImageFigure
          divClasses="skill-item"
          imgClasses="skill-logo html"
          imgsrc="./images/html-logo.png"
          imgalt="HTML"
          headerClasses="skill-text html-text"
          header="HTML"
        />
        <ImageFigure
          divClasses="skill-item"
          imgClasses="skill-logo css"
          imgsrc="./images/css-logo.png"
          imgalt="CSS"
          headerClasses="skill-text css-text"
          header="CSS"
        />
        <ImageFigure
          divClasses="skill-item"
          imgClasses="skill-logo javascript"
          imgsrc="./images/javascript-logo.jpg"
          imgalt="JavaScript"
          headerClasses="skill-text javascript-text"
          header="Javascript"
        />
        <ImageFigure
          divClasses="skill-item"
          imgClasses="skill-logo java"
          imgsrc="./images/java-logo.jpg"
          imgalt="Java"
          headerClasses="skill-text java-text"
          header="Java"
        />
        <ImageFigure
          divClasses="skill-item"
          imgClasses="skill-logo react"
          imgsrc="./images/react-logo.png"
          imgalt="React"
          headerClasses="skill-text react-text"
          header="React"
        />
        <ImageFigure
          divClasses="skill-item"
          imgClasses="skill-logo python"
          imgsrc="./images/python-logo.png"
          imgalt="Python"
          headerClasses="skill-text python-text"
          header="Python"
        />
      </div>
      <h1 className="main-title">Hobbies and Interests</h1>
      <div className="info-section hobbies">
        <p className="info-item info-text">
          In my free time, I like to listen to music. Some of my favourites
          include Led Zeppelin, Jimi Hendrix, and Queen.
        </p>
      </div>
    </div>
  );
}

export default About;
