import React from "react";
import dc from "../../public/dc_dark.jpg";
import Image from "next/image";
import Link from "next/link";
import cameroon from "../../public/cameroon.png";
import gabon from "../../public/gabon.png";
import togo from "../../public/togo.jpg";
import sa from "../../public/sa.jpg";
import tanz from "../../public/tanzania.jpg";
import liberia from "../../public/liberia.jpg";
import AboutCarousel from "../../components/AboutCarousel";
import africa from "../../public/pagne.jpg";
import MonthlyMeeting from "../../components/MonthlyMeeting";

const page = () => {
  const flags = [
    { country: "cameroon", img: cameroon },
    { country: "gabon", img: gabon },
    { country: "tanzania", img: tanz },
    { country: "togo", img: togo },
    { country: "south africa", img: sa },
    { country: "liberia", img: liberia },
  ];

  return (
    <div className="max-w-[1500px] ml-auto mr-auto text-2xl">
      <div className="flex flex-col relative">
        <Image
          src={dc}
          height={2000}
          width={2000}
          alt="architectural background for hero image"
          className="min-h-[500px] max-h-[800px]"
        />
        <div className="z-10 absolute top-1/2 w-full">
          <h1 className="text-white text-center font-extrabold text-8xl">
            About Us
          </h1>
          <h1 className=" text-white  text-center font-extrabold text-6xl">
            est. 2018
          </h1>
        </div>
      </div>
      <div className="pt-10 pb-10 text-2xl text-black">
        <div className="flex flex-col w-11/12 max-w-screen-2xl ml-5 mr-5 md:ml-auto md:mr-auto rounded-2xl mt-10">
          <h1 className="font-black text-4xl mb-5 mt-10 ">
            How We came To be{" "}
          </h1>
          <h2 className="text-2xl">
            On January 6th, 2018, a selected group of 14 women, with good
            standing in the society, came together to form an association that
            will foster the spirit of oneness, and solidarity, work relentlessly
            for the common good of the association, and meet the
            association&apos;s agenda, that of bringing resources to the
            disadvantaged with a unified force, and make the world a better
            place by empowering women and children.
          </h2>
          <div className="mt-5">
            We have grown over the years to 20+ members and our momentum is
            strong.
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-10 bg-coral">
        <div className="flex flex-col text-black mt-auto mb-auto ml-20">
          <h1 className="text-4xl font-black mr-10"> We believe in: </h1>
          <div className="mr-10 text-4xl">
            <ul className="list-disc list-inside mt-5 ml-10">
              <li>Sisterhood</li>
              <li>Charity</li>
              <li>Personal growth</li>
              <li>Community building</li>
              <li>Black excellence</li>
              <li>Supporting families </li>
            </ul>
          </div>
        </div>
        <div className="h-1/3 w-1/3 mt-10 mb-0 mr-20">
          <AboutCarousel />
        </div>
      </div>
      <MonthlyMeeting />
      <div className="ml-10 mr-10 mt-20">
        <h1 className="font-black text-black pt-5 pb-5 text-6xl">Our Roots</h1>
        <h2 className="">
          At present, the African Women of DMV consists of 15 women from various
          African Countries that include, including Cameroon, Liberia, Togo,
          Garbon, Tanzania, and South Africa. We empower and uplift each other
          by nurturing and fostering the spirit of sisterhood. Although our
          members come mostly from the continent of Africa, we welcome all women
          of the diaspora and those who have African Ancestry.​
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {flags.map((flag) => (
            <div key={flag.country} className="">
              <Image
                src={flag.img}
                height={500}
                width={700}
                className="h-60"
                alt={`flag of ${flag.country}`}
              ></Image>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={africa}
        height={1000}
        width={1000}
        alt="africa in pagne"
        className="ml-auto mr-auto"
      />
    </div>
  );
};

export default page;
