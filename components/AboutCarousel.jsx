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
    <div className="">
      <Carousel>
        <Image src={mall}></Image>
        <Image src={partybus}></Image>
        <Image src={sisters}></Image>
        <Image src={casino}></Image>
        <Image src={wedding}></Image>
      </Carousel>
    </div>
  );
};

export default AboutCarousel;
