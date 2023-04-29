import React from "react";
import kitchen from "../public/kitchen_dark.jpg";
import award from "../public/award_3_dark.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col relative">
        <Image
          src={award}
          alt="architectural background for hero image"
          width={2000}
          height={2000}
          className="min-h-[500px] max-h-[800px]"
        />
        <div className="z-10 absolute top-1/2 w-full ">
          <h1 className="text-white text-center font-extrabold text-6xl">
            Find your Sisters
          </h1>
          <h1 className=" text-white  text-center font-extrabold text-2xl">
            est. 2018
          </h1>
        </div>
      </div>
      <div className="pt-10 pb-10 text-2xl bg-coral text-white">
        <div className="flex flex-col w-11/12 max-w-screen-2xl ml-10 mr-5">
          <h1 className="font-black text-4xl ">African Women of the DMV</h1>
          <div className="mt-5">
            Our group is a social group and a Not-For-Profit organization
            registered in the state of Maryland. We believe that by coming
            together as a community, we can create positive change and promote
            the advancement of African women in all spheres of life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
