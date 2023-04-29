import React from "react";
import Image from "next/image";
import Link from "next/link";
import stairs from "../public/stairs.png";

const MonthlyMeeting = () => {
  return (
    <div className="flex text-2xl mt-10 border-t-8 border-b-8 border-double border-coral">
      <div className="mt-auto mb-auto pl-5 pr-5">
        <h1 className="font-black text-black pt-5 pb-5 text-4xl">
          Monthly Meeting
        </h1>
        <h2 className="">
          We currently meet every first Saturday of the month. Contact us for
          more information.
        </h2>
        <div className="">
          <h2 className="mt-5">Our monthly meeting entails:</h2>
          <ul className="list-disc list-outside ml-10">
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
              Celebrating milestones events such as the birth of a new baby and
              academic accomplishment
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <div>
            <div className="flex flex-col">
              Interested in participating? Learn how you can you can become
              involved.
              <Link href="/join">
                <div className="border-4 border-coral w-40 rounded-2xl mr-5 mt-5 text-center hover:text-white hover:bg-coral">
                  Join
                </div>
              </Link>
            </div>
            <h2 className="mt-5">
              Beyond our monthly meeting, we host additional events for
              birthdays, weddings, and other celebrations. See our full list of
              upcoming events.
            </h2>
            <Link href="/events">
              <div className="border-4 border-coral w-80 rounded-2xl pl-2 pr-2 mt-5 text-center hover:text-white hover:bg-coral">
                Upcoming Events
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={stairs}
        height={2000}
        width={2000}
        alt="monthly meeting"
        className="pt-10 pb-10"
      />
    </div>
  );
};

export default MonthlyMeeting;

{
  /* <Link href="/contact">
<div className="border-4 border-coral  w-60 rounded-2xl ml-auto mr-auto mt-5 text-center hover:text-white hover:bg-coral">
  Contact Us
</div>
</Link> */
}
