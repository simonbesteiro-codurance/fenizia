import React from "react";
import "./CarouselImageGenerator.css";

function CarouselImageGenerator({ image }) {
  return (
    <div className="main-carousel__render">
      <div className="main-carousel__render__image">
        <img src={image.source} alt={image.title}></img>
      </div>
      <div className="main-carousel__render__text">
        <p>{image.title}</p>
      </div>
      <div className="main-carousel__render__text">
        <p>{image.price}€</p>
      </div>
    </div>
  );
}

export default CarouselImageGenerator;
