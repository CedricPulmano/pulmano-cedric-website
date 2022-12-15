import React from "react";
import "./Experience.css";
import "./Pages.css";
import ImageFigure from "../ImageFigure.js";

function Experience() {
  return (
    <div className="main-page">
      <h1 className="main-title">Work Experience</h1>
      <div className="info-grid reverse ubc-ta">
        <p className="grid-item grid-text">
          Being a teaching assistant has been challenging, bringing me out of my
          comfort zone to help me be more confident and communicative. I have
          experience assisting in lectures, as well as leading labs with other
          peers. It is rewarding being able to use my leadership skills with my
          passion for computer science in a positive and impactful manner.
        </p>
        <ImageFigure
          divClasses="grid-item"
          imgClasses="company-img ubc-ta"
          imgsrc="./images/ubc-ta.png"
          imgalt="UBC Computer Science"
          headerClasses="company-text ubc-ta-text"
          header="UBC Computer Science"
        />
        <div className="grid-item job-title-section">
          <h2 className="company-title">UBC - Faculty of Computer Science</h2>
          <h3 className="position-title">CPSC 210 Teaching Assistant</h3>
          <h4 className="duration-title">September 2022 to Present</h4>
        </div>
      </div>
      <div className="info-grid chipotle">
        <div className="grid-item job-title-section">
          <h2 className="company-title">Chipotle Mexican Grill</h2>
          <h3 className="position-title">Crew Member</h3>
          <h4 className="duration-title">June 2021 to August 2022</h4>
        </div>
        <ImageFigure
          divClasses="grid-item"
          imgClasses="company-img chipotle"
          imgsrc="./images/chipotle.png"
          imgalt="Chipotle"
          headerClasses="company-text chipotle-text"
          header="Chipotle"
        />
        <p className="grid-item grid-text">
          Working in a fast-paced restaurant environment helped me develop my
          time management and planning skills, as I had to juggle multiple tasks
          at once to make sure that customers got their orders with efficient
          speed and were satisfied with their experience. I was also able to
          adapt to take on multiple roles based on the situation, such as
          changing stations, or helping newer employees with what they should
          do.
        </p>
      </div>
      <div className="info-grid reverse arctic-snow">
        <p className="grid-item grid-text">
          As a salter, I would always be on my feet. I would usually work with a
          partner, and we would be tasked with a tight schedule of sites that we
          had to do for the day. Planning was key, as we had to think of the
          most efficient route, plan how much resources we would need, and bring
          the correct equipment for the day. From this job, I gained a lot of
          time management and organization skills as a result.
        </p>
        <ImageFigure
          divClasses="grid-item"
          imgClasses="company-img arctic-snow"
          imgsrc="./images/arctic-snow.png"
          imgalt="Arctic Snow Removal"
          headerClasses="company-text arctic-snow-text"
          header="Arctic Snow Removal"
        />
        <div className="grid-item job-title-section">
          <h2 className="company-title">Arctic Snow Removal</h2>
          <h3 className="position-title">Salter / Snow Remover</h3>
          <h4 className="duration-title">October 2021 to February 2022</h4>
        </div>
      </div>
      <div className="info-grid catmandu">
        <div className="grid-item job-title-section">
          <h2 className="company-title">Catmandu Excavating</h2>
          <h3 className="position-title">Landscaper</h3>
          <h4 className="duration-title">July 2021 to October 2021</h4>
        </div>
        <ImageFigure
          divClasses="grid-item"
          imgClasses="company-img catmandu"
          imgsrc="./images/catmandu.jpg"
          imgalt="Catmandu Excavating"
          headerClasses="company-text catmandu-text"
          header="Catmandu Excavating"
        />
        <p className="grid-item grid-text">
          Being part of a team of landscapers helped me develop my teamwork
          skills, as often we would be assigned with a large site which had
          multiple tasks that we would have to complete for the day. As a
          result, coordination was necessary in order to finish the job on time.
          I learned that asking for help is not a negative, and that it is
          through cooperation that our work is most efficient.
        </p>
      </div>
      <h1 className="main-title">Volunteering</h1>
      <div className="info-grid reverse watcher-treasurer">
        <p className="grid-item grid-text">
          I volunteer as a watcher and treasurer at my church for the services
          for children, gaining valuable interpersonal and leadership skills. I
          also am able to handle finances and organize important records and
          paperwork.
        </p>
        <ImageFigure
          divClasses="grid-item"
          imgClasses="company-img church-of-christ"
          imgsrc="./images/inc.png"
          imgalt="Church of Christ"
          headerClasses="company-text church-of-christ-text"
          header="Church of Christ"
        />
        <div className="grid-item job-title-section">
          <h2 className="company-title">Church of Christ</h2>
          <h3 className="position-title">
            Children's Service Watcher / Treasurer
          </h3>
          <h4 className="duration-title">July 2018 to Present</h4>
        </div>
      </div>
      <div className="info-grid daycare-leader">
        <div className="grid-item job-title-section">
          <h2 className="company-title">Burnaby Neighbourhood House</h2>
          <h3 className="position-title">
            Daycare Leader / Food Hub Volunteer
          </h3>
          <h4 className="duration-title">October 2019 to Match 2020</h4>
          <h4 className="duration-title">July 2020 to November 2020</h4>
        </div>
        <ImageFigure
          divClasses="grid-item"
          imgClasses="company-img bnh"
          imgsrc="./images/bnh.jpg"
          imgalt="Burnaby Neighbourhood House"
          headerClasses="company-text bnh-text"
          header="Burnaby Neighbourhood House"
        />
        <p className="grid-item grid-text">
          Helping out at a daycare and a food hub helped me develop many
          positive qualities, such as patience, communication, and compassion.
        </p>
      </div>
    </div>
  );
}

export default Experience;
