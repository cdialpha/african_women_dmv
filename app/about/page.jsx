import React from "react";
import dc from "../../public/dc_dark.jpg";
import Image from "next/image";
import Link from "next/link";
import cameroon from "../../public/cameroon.jpg";
import gabon from "../../public/gabon.jpg";
import togo from "../../public/togo.jpg";
import sa from "../../public/sa.jpg";
import tanz from "../../public/tanzania.jpg";
import liberia from "../../public/liberia.jpg";
import AboutCarousel from "../../components/AboutCarousel";
import stairs from "../../public/stairs.png";

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
    <div className="max-w-[1500px] ml-auto mr-auto text-4xl">
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
      <div className="pt-10 pb-10 text-4xl text-black">
        <div className="flex flex-col w-11/12 max-w-screen-2xl ml-5 mr-5 md:ml-auto md:mr-auto rounded-2xl mt-10">
          <h1 className="font-black text-6xl mb-5 mt-10 ">
            How We came To be{" "}
          </h1>
          <h2 className="text-4xl">
            On January 6th, 2018, a selected group of 14 women, with good
            standing in the society, came together to form an association that
            will foster the spirit of oneness, and solidarity, work relentlessly
            for the common good of the association, and meet the
            association&apos;s agenda, that of bringing resources to the
            disadvantaged with a unified force, and make the world a better
            place by empowering women and children.
          </h2>
          <div className="mt-5">
            We have grown over the years to 20+ members and
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-10 bg-coral">
        <div className="flex flex-col text-black mt-auto mb-auto ml-20">
          <h1 className="text-6xl font-black mr-10"> We believe in: </h1>
          <div className="text-4xl mr-10">
            <ul className="list-disc list-inside mt-5 ml-10">
              <li>sisterhood</li>
              <li>charity</li>
              <li>personal growth</li>
              <li>community building</li>
              <li>black excellence</li>
              <li>Supporting families </li>
            </ul>
          </div>
        </div>
        <div className="h-1/3 w-1/3 mt-10 mb-0 mr-20">
          <AboutCarousel showThumbs={true} />
        </div>
      </div>
      <div className="ml-10 mr-10 mt-10 text-4xl">
        <div className="flex">
          <div className=" h-full mt-auto mb-auto pl-5 pr-5">
            <h1 className="font-black text-black pt-5 pb-5 text-6xl">
              Monthly Meeting
            </h1>
            <h2 className="">
              We currently meet every first Saturday of the month. Contact us
              for more information.
            </h2>
            <div className="">
              <h2 className="mt-5">Our monthly meeting entails:</h2>
              <ul className="list-disc list-outside w-3/4 ml-10">
                <li>
                  Discussing ideas that promotes the vision of our organization.
                </li>
                <li>
                  Uplifting and empowering our members by celebrating monthly
                  birthdays.
                </li>
                <li>
                  We empathize and sympathize with our members during tragic
                  circumstances such as the lost of a love one.
                </li>
                <li>
                  Celebrating milestones events such as the birth of a new baby
                  and academic accomplishment
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link href="/join">
                <div className="border-4 border-coral text-4xl text-black w-40 rounded-2xl mr-5 mt-5 text-center hover:text-white hover:bg-coral">
                  Join
                </div>
              </Link>
              <Link href="/contact">
                <div className="border-4 border-coral text-4xl text-black w-60 rounded-2xl ml-auto mr-auto mt-5 text-center hover:text-white hover:bg-coral">
                  Contact Us
                </div>
              </Link>
            </div>
            <h2 className="mt-5">
              Beyond our monthly meeting, we host additional events for
              birthdays, weddings, and other celebrations. See our full list of
              upcoming events.
            </h2>
            <Link href="/events">
              <div className="border-4 border-coral text-4xl text-black w-80 rounded-2xl pl-2 pr-2 ml-auto mr-auto mt-5 text-center hover:text-white hover:bg-coral">
                Upcoming Events
              </div>
            </Link>
          </div>
          <Image
            src={stairs}
            height={2000}
            width={2000}
            alt="stairs"
            className="mt-auto mb-auto"
          ></Image>
        </div>
      </div>
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
    </div>
  );
};

export default page;
