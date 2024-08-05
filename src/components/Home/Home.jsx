import React from "react";
import { Link } from "react-router-dom";
import TempleSlider from "../TempleSlider/TempleSlider"


import "@coreui/coreui/dist/css/coreui.min.css";

import AutoSliderCarousel from "./AutoSliderCarousel";
import Carousal from "./Carousal";
import Separator from "../Separator/separator";
import ChaarDham from "../ChaarDham/ChaarDham";
// import Map from "../Map/Map";


export default function Home() {
  return (
    <div className="">
    <Carousal/>
    <Separator/>
    <ChaarDham/>
    <TempleSlider/>

    {/* <Map/> */}
  


      
    </div>
  );
}
