import React from "react";
import "./Pages.css";
import "./Contact.css";

function Contact() {
  return (
    <div className="main-page">
      <h1 className="main-title">Contact Me</h1>
      <p className="info-item info-text">
        Thank you for taking the time to get to know me. Feel free to reach out
        and chat about anything!
      </p>
      <div className="info-item contact-info">
        <p className="info-text">Email: pulmano.cedric@gmail.com</p>
        <p className="info-text">Phone: (236)-866-8826</p>
      </div>
    </div>
  );
}

export default Contact;

// FORM TO ADD
/* 
<div className="form-container">
  <form
    className="contact-form"
    action="aeb929ee0619652454b335e3bd426fa7"
    method="POST"
  >
    <div className="hidden-form-settings">
      <input
        type="hidden"
        name="_subject"
        value="Message from Portfolio Website!"
      ></input>
      <input
        type="hidden"
        name="_autoresponse"
        value="Thank you for your message! I will check it as soon as possible."
      ></input>
      <input type="hidden" name="_template" value="box"></input>
    </div>
    <div className="personal-info">
      <label for="name">Name</label>
      <input
        className="box input-box"
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        required
      ></input>
      <label for="email">Email</label>
      <input
        className="box input-box"
        type="email"
        name="email"
        id="email"
        placeholder="Your Email"
        required
      ></input>
    </div>
    <div className="message-info">
      <label for="message" required>
        Message
      </label>
      <textarea
        className="box textarea-box"
        name="message"
        id="message"
        placeholder="Write away!"
        rows="4"
      ></textarea>
    </div>
    <button className="submit-button" type="submit">
      Submit
    </button>
  </form>
</div>;
*/
