import React from "react";
import Image from "next/image";
import Button from "../../components/Button";
import picnic from "../../public/picnic_dark.jpg";
import event1 from "../../public/event_1.png";
import event2 from "../../public/event_2.jpg";
import event3 from "../../public/event_3.png";
import event4 from "../../public/event_4.png";
import casino from "../../public/casino.png";
import event5 from "../../public/event_5.png";
import event6 from "../../public/event_6.jpg";
import event7 from "../../public/event_7.png";
import event8 from "../../public/event_8.png";
import event9 from "../../public/event_9.png";
import event10 from "../../public/event_10.png";

const page = () => {
  const eventPhotos = [
    { desc: "description", img: event1 },
    { desc: "description", img: event2 },
    { desc: "description", img: event3 },
    { desc: "description", img: event4 },
    { desc: "description", img: casino },
    { desc: "description", img: event5 },
    { desc: "description", img: event6 },
    { desc: "description", img: event7 },
    { desc: "description", img: event8 },
    { desc: "description", img: event9 },
    { desc: "description", img: event10 },
  ];
  return (
    <div className="max-w-[1500px] h-2000 ml-auto mr-auto">
      <div className="flex flex-col relative">
        <Image
          src={picnic}
          height={2000}
          width={2000}
          alt="architectural background for hero image"
          className="min-h-[500px] max-h-[800px]"
        />
        <div className="z-10 absolute top-1/2 w-full">
          <h1 className="text-white text-center font-extrabold text-6xl">
            Past & Future Events
          </h1>
        </div>
      </div>
      <div>
        <h1 className="mt-10 font-black text-4xl">Upcoming Activities</h1>
        <div className="text-2xl mt-5">
          After Membership, please join the mailing list for details of upcoming
          events. For the safety of the group, locations and times will only be
          provided to members.
        </div>
      </div>
      <div className="mt-10 text-2xl">
        <h1 className="font-black text-4xl">Past and Future Events</h1>
        <h1>
          We are constantly planning the upcoming months, to be full of fun
          activities, meaningful causes, and adventerous trips. Some of our past
          events include:
        </h1>
        <ul className="list-disc list-inside">
          <li>Cookouts, picnics</li>
          <li>Neighboring destinations & group vacations</li>
          <li>Birthdays, Weddings, Graduations, & Baby Showers </li>
          <li>Supporting each other through difficult life moments</li>
          <li>Group Lunches, and dinners</li>
          <li>Group Charity Events</li>
          <li> Upcoming events </li>
        </ul>
      </div>
      <div className="mt-10 text-2xl bg-coral pl-5 pr-5 rounded-xl pb-5">
        <h1 className="font-black text-4xl text-center pt-5 pb-5">
          Gallery of Past Events
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {eventPhotos.map((photo) => (
            <div key={photo.desc} className="">
              <Image
                src={photo.img}
                height={1000}
                width={1000}
                className=""
              ></Image>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="mt-20 font-black text-4xl">Join Our Next Event!</h1>
        <div className="text-2xl mt-5">
          Are of the African Diaspora and in the DMV area? Are you interested in
          participating in our next event? Send us an email and join us for an
          outing.
        </div>
        <Button text="Learn how to Join" href="/join" />
      </div>
    </div>
  );
};

export default page;
