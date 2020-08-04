import React from "react";
import Slider from "./Slider";
import Carousel from "./Carousel";

function Dashboard() {
  return (
    <>
      <Carousel />
      <Slider order="newRelease" url="novedades" text="NOVEDADES" />
      <Slider order="bestSeller" url="mas-vendidos" text="MÁS VENDIDOS" />
    </>
  );
}

export default Dashboard;
