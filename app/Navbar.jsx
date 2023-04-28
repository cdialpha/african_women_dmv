"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "../styles/globals.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import logo from "../public/logo.png";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../constants/responsive";
import { usePathname } from "next/navigation";
// import Hamburger from "../components/Hamburger";

const Navbar = () => {
  const navItems = ["about", "join", "events"];
  const isLaptop = useMediaQuery({ maxWidth: deviceSize.laptop });
  let pathname = usePathname().substring(1);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  console.log(pathname);

  // const handleClick = () => {
  //   setHamburgerIsOpen = !hamburgerIsOpen;
  // };

  return (
    <div className="w-screen fixed z-50 bg-white ">
      <div className="h-20 flex justify-between">
        <div className="mt-auto mb-auto">
          <div className="">
            <div className="flex ml-5 ">
              <Link href="/">
                <div className="flex md:mr-2 min-w-20">
                  <Image
                    src={logo}
                    alt="logo"
                    height={100}
                    width={100}
                    className="mt-auto mb-auto"
                  />
                  {isLaptop ? null : (
                    <h1 className="mt-auto mb-auto rubik font-bold text-xl ml-2">
                      African Women of the DMV
                    </h1>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
        {isLaptop ? (
          <GiHamburgerMenu
            className="black fixed right-10 top-10 hover:scale-110"
            // onClick={handleClick}
          />
        ) : (
          <div className="flex mt-auto mb-auto  justify-between text-black font-extrabold">
            <div
              className={`${
                pathname == "/" ? "border-coral" : "border-slate-200"
              } border-b-4 ml-2 mr-6`}
            >
              <Link href="/" className=" ml-2 mr-2">
                home
              </Link>
            </div>

            {navItems.map((navItem, index) => (
              <div key={index} className="flex mr-5">
                <div
                  className={`${
                    pathname == navItem ? "border-coral" : "border-slate-200"
                  } border-b-4 ml-2 mr-2`}
                >
                  <Link href={navItem} className=" ml-2 mr-2">
                    {navItem}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
