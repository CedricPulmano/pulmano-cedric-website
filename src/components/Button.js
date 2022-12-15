import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ link, text }) {
  return (
    <Link to={link}>
      <button className="btn">{text}</button>
    </Link>
  );
}

export default Button;
