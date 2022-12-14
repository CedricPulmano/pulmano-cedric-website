import React from "react";
import "./About.css";
import "./Pages.css";
import ImageFigure from "../ImageFigure";
import ImageCard from "../ImageCard";

function About() {
  return (
    <div className="main-page">
      <h1 className="main-title">About Me</h1>
      <div className="intro">
        <p className="info-item info-text">
          My name is Cedric Pulmano, a second year computer science student at
          the University of British Columbia. I started at UBC in 2021, and plan
          to graduate in 2025. I have been programming since high school, and I
          am always aiming to learn new things!
        </p>
        <ImageFigure
          divClasses="info-item"
          imgClasses="media-img ubc"
          imgsrc="./images/ubc-logo.jpg"
          imgalt="UBC"
          headerClasses="media-text ubc-text"
          header="My School"
        />
      </div>
      <h1 className="main-title">Skills</h1>
      <div className="skill-grid">
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
          In my free time, I enjoy listening to music and practicing how to play
          the guitar. I also try to stay active by playing sports, going on
          walks, going on camping trips, and working out at the gym. Growing up
          in the Lower Mainland helped me grow to love the outdoors, as I often
          play sports with friends, and have enjoyed working jobs that were
          mostly outside. I currently attend and volunteer at my church, as it
          helps me stay involved within my community and make friends.
        </p>
      </div>
      <div className="info-section media-section">
        <div className="movie-section movies">
          <h1 className="main-title">Movies</h1>
          <ImageFigure
            divClasses="info-item"
            imgClasses="media-img good-bad-ugly"
            imgsrc="./images/good-bad-ugly.jpg"
            imgalt="The Good, The Bad, and The Ugly"
            headerClasses="media-text good-bad-ugly-text"
            header="The Good, The Bad, and The Ugly (1966)"
          />
          <ImageFigure
            divClasses="info-item"
            imgClasses="media-img pulp-fiction"
            imgsrc="./images/pulp-fiction.jpg"
            imgalt="Pulp Fiction"
            headerClasses="media-text pulp-fiction-text"
            header="Pulp Fiction (1994)"
          />
          <ImageFigure
            divClasses="info-item"
            imgClasses="media-img whiplash"
            imgsrc="./images/whiplash.jpg"
            imgalt="Whiplash"
            headerClasses="media-text whiplash-text"
            header="Whiplash (2014)"
          />
          <ImageFigure
            divClasses="info-item"
            imgClasses="media-img the-thing"
            imgsrc="./images/the-thing.jpg"
            imgalt="The Thing"
            headerClasses="media-text the-thing-text"
            header="The Thing (1982)"
          />
          <ImageFigure
            divClasses="info-item"
            imgClasses="media-img no-country"
            imgsrc="./images/no-country.jpg"
            imgalt="No Country for Old Men"
            headerClasses="media-text no-country-text"
            header="No Country for Old Men (2007)"
          />
        </div>
        <div className="music-section music">
          <h1
            className="main-title
  "
          >
            Music
          </h1>
          <ImageCard
            cardClasses="info-item jimi-hendrix-card"
            imgfig={
              <ImageFigure
                imgClasses="media-img jimi-hendrix"
                imgsrc="./images/jimi-hendrix-experience.jpg"
                imgalt="The Jimi Hendrix Experience"
                headerClasses="media-text jimi-hendrix-text"
                header="The Jimi Hendrix Experience"
              />
            }
            backtext={
              <div className="text">
                <h1>Favourite Songs</h1>
                <p>- Purple Haze</p>
                <p>- All Along the Watchtower</p>
                <p>- Voodoo Child (Slight Return)</p>
                <p>- Bold as Love</p>
                <p>- Fire</p>
              </div>
            }
          />
          <ImageCard
            cardClasses="info-item led-zeppelin-card"
            imgfig={
              <ImageFigure
                imgClasses="media-img led-zeppelin"
                imgsrc="./images/led-zeppelin.jpg"
                imgalt="Led Zeppelin"
                headerClasses="media-text led-zeppelin-text"
                header="Led Zeppelin"
              />
            }
            backtext={
              <div className="text">
                <h1>Favourite Songs</h1>
                <p>- When the Levee Breaks</p>
                <p>- Black Dog</p>
                <p>- Immigrant Song</p>
                <p>- Over the Hills and Far Away</p>
              </div>
            }
          />
          <ImageCard
            cardClasses="info-item queen-card"
            imgfig={
              <ImageFigure
                imgClasses="media-img queen"
                imgsrc="./images/queen.jpg"
                imgalt="Queen"
                headerClasses="media-text queen-text"
                header="Queen"
              />
            }
            backtext={
              <div className="text">
                <h1>Favourite Songs</h1>
                <p>- Killer Queen</p>
                <p>- Seven Seas of Rhye</p>
                <p>- Ogre Battle</p>
                <p>- It's a Hard Life</p>
                <p>- Somebody to Love</p>
              </div>
            }
          />
          <ImageCard
            cardClasses="info-item nirvana-card"
            imgfig={
              <ImageFigure
                imgClasses="media-img nirvana"
                imgsrc="./images/nirvana.jpg"
                imgalt="Nirvana"
                headerClasses="media-text nirvana-text"
                header="Nirvana"
              />
            }
            backtext={
              <div className="text">
                <h1>Favourite Songs</h1>
                <p>- Smells Like Teen Spirit</p>
                <p>- Breed</p>
                <p>- Come As You Are</p>
                <p>- Sliver</p>
              </div>
            }
          />
          <ImageCard
            cardClasses="info-item ccr-card"
            imgfig={
              <ImageFigure
                imgClasses="media-img ccr"
                imgsrc="./images/ccr.jpg"
                imgalt="Creedence Clearwater Revival"
                headerClasses="media-text ccr-text"
                header="Creedence Clearwater Revival"
              />
            }
            backtext={
              <div className="text">
                <h1>Favourite Songs</h1>
                <p>- Fortunate Son</p>
                <p>- Lookin' Out My Back Door</p>
                <p>- Run Through the Jungle</p>
                <p>- I Heard It Through the Grapevine</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About;
