import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col">
      {/* spacer  */}
      <div className="h-80" />
      {/* spacer  */}
      <div className="pb-20 bg-coral">
        <div className="max-w-7xl ml-auto mr-auto pt-20">
          <div className="flex justify-left mb-10 text-slate-800 text-4xl underline">
            <Link href="/" className="mr-5 hover:text-white ">
              Home
            </Link>
            <Link href="/about" className="ml-5 mr-5 hover:text-white ">
              About
            </Link>
            <Link href="/join" className="ml-5 mr-5 hover:text-white  ">
              Join
            </Link>
            <Link href="/" className="ml-5 mr-5 hover:text-white">
              Events
            </Link>
          </div>
          <h2 className="text-2xl text-slate-800">
            Copyright © 20018-2023 --- AFRICAN WOMEN OF THE DMV --- ALL RIGHTS
            RESERVED.
          </h2>
          <div className="ml-auto mr-auto"></div>
          <h2 className="mt-10 text-2xl text-slate-800">
            POWERED BY GITHUB PAGES. DESIGNED BY CALVIN IRWIN.
          </h2>
          <h2 className="text-center text-2xl text-slate-800"> </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
