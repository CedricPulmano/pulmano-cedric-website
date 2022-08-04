import React from "react";
import "./Home.css";
import Button from "../Button.js";
import { ButtonItems } from "../ButtonItems.js";

function Home() {
  return (
    <div className="home-page">
      <h1 className="home-item home-title">Welcome!</h1>
      <div className="home-item btns">
        {ButtonItems.map((item) => (
          <Button link={item.link} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default Home;
