import React from "react";
import "./Footer.css";
import { SocialItems } from "./SocialItems";

function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-text">
        Made with HTML, CSS, JavaScript, and React
      </h1>
      <div className="social-logos">
        {SocialItems.map((item) => {
          return (
            <a className="social-icon" href={item.link} target="_blank">
              <i class={item.logoClass}></i>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
