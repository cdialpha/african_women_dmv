"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";
import funeral from "../public/funeral.png";
import wedding from "../public/wedding.png";
import casino from "../public/casino.png";
import sisters from "../public/sisters.png";
import mall from "../public/mall.png";
import partybus from "../public/partybus2.png";

import Image from "next/image";

const AboutCarousel = () => {
  return (
    <div className="h-[1000px] flex">
      <Carousel className="flex">
        <Image src={mall} alt="image 1"></Image>
        <Image src={partybus} alt="image 1"></Image>
        <Image src={sisters} alt="image 1"></Image>
        <Image src={casino} alt="image 1"></Image>
        <Image src={wedding} alt="image 1"></Image>
      </Carousel>
    </div>
  );
};

export default AboutCarousel;
