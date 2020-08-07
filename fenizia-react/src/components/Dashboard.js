import React from "react";
import Slider from "./Slider";
import Carousel from "./Carousel";
import Cover from './Cover'


function Dashboard() {
  return (
    <>
        <Cover />
        {/* <Carousel /> */}
        <Slider order="newRelease" text="NOVEDADES" />
        <Slider order="bestSeller" text="MÁS VENDIDOS" />
    </>
  );
}

export default Dashboard;
