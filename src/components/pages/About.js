import React from "react";
import ImageFigure from "../ImageFigure";
import "./Pages.css";

function About() {
  return (
    <div className="main-page">
      <h1 className="main-title">About</h1>
      <div className="info row-one">
        <p className="info-item info-text">
          My name is Cedric Pulmano, a second year computer science student at
          the University of British Columbia. I started at UBC in 2021, and plan
          to graduate in 2025. I have been programming since high school, and I
          am always aiming to learn new things!
        </p>
        <ImageFigure
          divClasses="info-item info-figure"
          imgClasses="info-img ubc"
          imgsrc="./images/ubc-logo.jpg"
          imgalt="UBC"
          headerClasses="info-caption ubc-text"
          header="My School"
        />
      </div>
      <h1 className="main-title">Skills</h1>
      <div className="info row-two">
        <ImageFigure
          divClasses="info-item info-figure"
          imgClasses="info-img skill-logo java"
          imgsrc="./images/java-logo.jpg"
          imgalt="Java"
          headerClasses="info-caption java-text"
          header="Java"
        />
        <ImageFigure
          divClasses="info-item info-figure"
          imgClasses="info-img skill-logo html"
          imgsrc="./images/html-logo.png"
          imgalt="HTML"
          headerClasses="info-caption html-text"
          header="HTML"
        />
      </div>
    </div>
  );
}

export default About;
