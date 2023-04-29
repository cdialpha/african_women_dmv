import React from "react";
import Hero from "../components/Hero";
import IntroStory from "../components/IntroStory";
import IntroEvents from "../components/IntroEvents";
import IntroMission from "../components/IntroMission";
import mall from "../public/mall_2.jpg";
import Image from "next/image";
import HomeCarousel from "../components/HomeCarousel";
import { Cedarville_Cursive } from "next/font/google";

const CedarvilleCursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

const CedarvilleCursiveClass = CedarvilleCursive.className;

const Home = () => {
  return (
    <div className="overflow-hidden relative top-20 flex flex-col max-w-7xl ml-auto mr-auto">
      <Hero />
      <IntroStory />
      <IntroEvents />

      <div className="mt-10 mb-10 bg-slate-100 border-t-8 border-b-8 border-double border-coral bg-cherry">
        <Image
          src={mall}
          alt="group event at the mall"
          width={2000}
          height={2000}
          className="w-10/12 pt-10 pb-10 ml-auto mr-auto"
        />
      </div>
      <IntroMission />
      <div className="flex justify-center h-[1000px] pt-10 pb-10 pl-10 pr-10 border-t-8 border-b-8 border-double border-coral bg-cherry">
        <h1
          className={`${CedarvilleCursiveClass} text-4xl pl-5 pr-5 mt-auto mb-auto`}
        >
          "When I dare to be powerful, to use my strength in the service of my
          vision, then it becomes less and less important whether I am afraid."
          -Audre Lorde
        </h1>
        <HomeCarousel />
      </div>
    </div>
  );
};

export default Home;
