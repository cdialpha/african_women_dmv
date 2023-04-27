import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../components/Button";

const IntroEvents = () => {
  return (
    <div className="pt-5 flex flex-col ml-10">
      <h1 className="font-black text-4xl">Our Activities & Events</h1>
      <div className="w-11/12 max-w-screen-2xl text-2xl">
        <p className="mt-5">
          The group organizes various activities, such as cultural celebrations,
          educational meetings that address issues relevant to African women,
          such as helping family members back home, employment, health, and
          educational opportunities. These events allow us to foster friendship
          and create opportunities for networking and collaboration.
        </p>
        <p className="mt-5">
          While we are focused on health, charity, and professional development,
          we also partake in many social activities, such as dinners and
          destination events.
        </p>
      </div>
      <Button text="See Upcoming Events" href="/events" />
    </div>
  );
};

export default IntroEvents;
