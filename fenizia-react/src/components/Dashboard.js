import React from "react";
import Slider from "./Slider";
import Carousel from "./Carousel";

function Dashboard() {
  return (
    <>
      <Carousel />
      <Slider order="book" />
      <Slider order="notebook" />
    </>
  );
}

export default Dashboard;
