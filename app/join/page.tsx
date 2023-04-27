import React from "react";
import Image from "next/image";
import meeting from "../../public/meeting_dark.jpg";
import award from "../../public/award_2.jpg";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const page = () => {
  return (
    <div className="max-w-[1500px] h-2000 ml-auto mr-auto">
      <div className="flex flex-col relative">
        <Image
          src={meeting}
          height={2000}
          width={2000}
          alt="architectural background for hero image"
          className="min-h-[500px] max-h-[800px]"
        />
        <div className="z-10 absolute top-1/2 w-full">
          <h1 className="text-white text-center font-extrabold text-6xl">
            Join Our Organization
          </h1>
        </div>
      </div>
      <div>
        <h1 className="mt-10 font-black text-4xl">Membership requirements</h1>
        <p className="text-2xl mt-5">
          Membership shall be open to all law-abiding women of age 30 years and
          above, who have fulfilled all the necessary conditions, and who are
          willing to abide by the rules and regulations governing the
          association.
        </p>
      </div>
      <div className="bg-coral flex flex-col justify-center pl-10 mt-10 pt-10 pb-10 text-white text-2xl">
        <h1 className="underline text-4xl font-extrabold">Contact:</h1>
        <div className="flex mt-5">
          <h2 className="font-extrabold"> email: </h2>
          <h2 className="ml-5 text">dev.african.women.dmv@gmail.com</h2>
        </div>
        <div className="flex mt-5">
          <h2 className="font-extrabold"> phone: </h2>
          <h2 className="ml-5 text"> 555-555-5555 </h2>
        </div>

        <div className="flex mt-5 font-extrabold">
          <Link
            href="https://www.facebook.com/profile.php?id=100057655202561"
            className="flex hover:text-slate-300"
          >
            <BsFacebook />
            <p className="ml-2"> Facebook </p>
          </Link>

          <Link
            href="/"
            className="ml-5 hover:text-slate-300 flex hover:text-slate-300 "
          >
            <BsInstagram />
            <p className="ml-2"> Instagram </p>
          </Link>
        </div>
      </div>
      <div className="mt-10 text-2xl">
        <h1 className="font-black text-4xl">Leadership Positions</h1>
        <h1>
          Our executive team is made up of the following governing positions.
        </h1>
        <ul className="list-disc list-inside ml-5 mt-5">
          <li>President of the Organization</li>
          <li>The Vice President</li>
          <li>The General Secretary</li>
          <li> The Financial Secretary</li>
          <li>The Assistant Financial Secretary</li>
          <li> The Treasurer</li>
          <li> The Social Secretary</li>
          <li>The Assistant Treasurer </li>
          <li>The Social Secretary</li>
          <li> The Protocol Officer</li>
        </ul>
        <p className="mt-5">
          We kindly ask that members participate in activities for more than 1
          year prior to serving in a leadership position.
        </p>
      </div>
      <div className="mt-10 mb-10 bg-slate-100 border-t-8 border-b-8 border-double border-coral">
        <Image
          src={award}
          alt="group event at the mall"
          width={2000}
          height={2000}
          className="w-10/12 pt-10 pb-10 ml-auto mr-auto"
        />
      </div>

      <div>
        <h1 className="mt-10 font-black text-4xl">How to Join</h1>
        <div className="text-2xl mt-5">
          Please send an email to the address above. Please include your name, a
          brief bio, and why you think you would be a good fit for our
          organization. See our Frequently asked questions for more information.
        </div>
      </div>
    </div>
  );
};

export default page;
