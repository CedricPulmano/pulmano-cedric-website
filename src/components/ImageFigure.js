import React from "react";
import "./ImageFigure.css";

function ImageFigure({
  divClasses,
  imgClasses,
  headerClasses,
  header,
  imgsrc,
  imgalt,
}) {
  return (
    <div className={divClasses + " imgfig-figure"}>
      <img
        className={imgClasses + " imgfig-img"}
        src={imgsrc}
        alt={imgalt}
      ></img>
      <h3 className={headerClasses + " imgfig-caption"}>{header}</h3>
    </div>
  );
}

export default ImageFigure;
