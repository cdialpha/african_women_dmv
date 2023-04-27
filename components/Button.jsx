import React from "react";
import Link from "next/link";
import { FcRight } from "react-icons/fc";

const Button = ({ text, href }) => {
  return (
    <Link href={href}>
      <div className=" flex justify-center border-4 border-slate-400 text-2xl w-80 text-black rounded-2xl mt-10 pl-5 pr-2 pt-2 pb-2 text-center hover:bg-coral hover:text-white">
        {text}
        <FcRight className="text-slate-500 text-2xl ml-4 mt-auto mb-auto" />
      </div>
    </Link>
  );
};

export default Button;
