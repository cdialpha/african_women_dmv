import React from "react";
import Image from "next/image";

const IntroMission = () => {
  return (
    <div className="pt-5 pb-5 flex flex-col ml-10 mt-10">
      <div>
        <h1 className="font-black text-4xl ">Our Objectives</h1>
        <ul class="list-disc list-inside mt-5 mb-10 text-2xl">
          <li>
            To generate funds and apply them toward the official business of the
            organization
          </li>
          <li>To promote the spirit of solidarity among members</li>
          <li>To provide scholarships to needy children</li>
          <li>To help empower women and children in the community</li>
          <li>Organize educational events for women and children.</li>
        </ul>
      </div>
    </div>
  );
};

export default IntroMission;
