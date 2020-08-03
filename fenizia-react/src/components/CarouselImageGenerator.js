import React from "react";
import "./CarouselImageGenerator.css";

function CarouselImageGenerator({ image }) {
  return (
    <div className="main-carousel__image">
      <img src={image.source}></img>
      <p>{image.title}</p>
    </div>
  );
}

export default CarouselImageGenerator;
