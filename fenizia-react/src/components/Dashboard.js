import React from "react";
import Slider from "./Slider";
import Carousel from "./Carousel";
import Cover from './Cover'


function Dashboard() {
  return (
    <>
        <Cover />
        <Carousel />
        <Slider order="newRelease" url="novedades" text="NOVEDADES" />
        <Slider order="bestSeller" url="mas-vendidos" text="MÁS VENDIDOS" />
    </>
  );
}

export default Dashboard;
