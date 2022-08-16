import React from "react";
import ImageFigure from "../ImageFigure.js";
import "./Experience.css";

function Experience() {
  return (
    <div className="main-page">
      <h1 className="main-title">Work Experience</h1>
      <div className="info-grid chipotle">
        <div className="info-item job-title-section">
          <h2 className="company-title">Chipotle Mexican Grill</h2>
          <h3 className="position-title">Crew Member</h3>
          <h4 className="duration-title">June 2021 to August 2022</h4>
        </div>
        <ImageFigure
          divClasses="info-item"
          imgClasses="company-img chipotle"
          imgsrc="./images/chipotle.png"
          imgalt="Chipotle"
          headerClasses="chipotle-text"
          header="Chipotle"
        />
        <p className="info-item info-text">
          Working in a fast-paced restaurant environment helped me develop my
          time management and planning skills, as I had to juggle multiple tasks
          at once to make sure that customers got their orders with efficient
          speed and were satisfied with their experience. I was also able to
          adapt to take on multiple roles based on the situation, such as
          changing stations, or helping newer employees with what they should
          do.
        </p>
      </div>
      <div className="info-section landscaping"></div>
      <div className="info-section salting"></div>
      <h1 className="main-title">Volunteering</h1>
      <div className="info-section daycare-leadership"></div>
      <div className="info-section watcher-auditor"></div>
      <div className="info-section los"></div>
    </div>
  );
}

export default Experience;
