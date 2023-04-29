import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const QuickSummary = () => {
  return (
    <div className="pt-10 pb-10 flex flex-col text-2xl ml-10 w-11/12">
      <h1 className="font-black text-4xl">A Brief Introduction </h1>
      <div className="flex flex-col md:flex-row mr-5 mt-5">
        We are a group of women that provide support, connection, and
        empowerment to one another. The group typically comprises women of
        African descent who share common cultural and social experiences and
        seek to create a supportive environment where they can explore their
        identities, develop new skills, and promote personal growth and
        community building.
      </div>
      <Button href="/about" text="Hear Our Story" />
    </div>
  );
};

export default QuickSummary;
