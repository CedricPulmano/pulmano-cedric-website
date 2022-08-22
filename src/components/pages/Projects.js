import React from "react";
import "./Pages.css";
import ImageFigure from "../ImageFigure";

function Projects() {
  return (
    <div className="main-page">
      <h1 className="main-title">Projects</h1>
      <a
        className="info-item"
        href="https://github.com/CedricPulmano/Lesson-Plan-Organizer"
        target="_blank"
      >
        <h2 className="project-title">Lesson Plan Organizer</h2>
      </a>
      <p className="info-item info-text">
        The purpose of this program is to organize and keep track of the
        progress of students that are under a lesson plan. I created this
        program to enhance my knowledge in Java and in general project building
        skills. Some functionalities of the application include: creating
        lessons, adding students, assigning teachers to teach lessons, adding
        requirements to teach certain lessons, and saving and loading data.
      </p>
      <div className="info-section">
        <ImageFigure
          imgClasses="project-img lp-gui-img"
          imgsrc="./images/lesson-plan-gui.png"
          imgalt="Lesson Plan (GUI)"
          headerClasses="project-text lp-gui-text"
          header="Lesson Plan (GUI)"
        />
        <ImageFigure
          imgClasses="project-img lp-console-img"
          imgsrc="./images/lesson-plan-console.png"
          imgalt="Lesson Plan (Console)"
          headerClasses="project-text lp-cosole-text"
          header="Lesson Plan (Console)"
        />
      </div>
    </div>
  );
}

export default Projects;
