"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";
import Image from "next/image";

import event10 from "../public/event_10.png";
import sisters from "../public/sisters.png";
import event12 from "../public/event_12.png";

const AboutCarousel = () => {
  return (
    <div className="ml-auto">
      <Carousel autoPlay={true} showThumbs={false} className="mt-auto">
        <Image src={event10} alt="image 1"></Image>
        <Image src={event12} alt="image 1"></Image>
        <Image src={sisters} alt="image 1"></Image>
      </Carousel>
    </div>
  );
};

export default AboutCarousel;
