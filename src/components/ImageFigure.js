import React from "react";

function ImageFigure({
  divClasses,
  imgClasses,
  headerClasses,
  header,
  imgsrc,
  imgalt,
}) {
  return (
    <div className={divClasses}>
      <img className={imgClasses} src={imgsrc} alt={imgalt}></img>
      <h3 className={headerClasses}>{header}</h3>
    </div>
  );
}

export default ImageFigure;
