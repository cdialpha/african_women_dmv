"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [checkboxes, setCheckboxes] = useState([""]);
  // checkbox
  const options = [
    { id: 1, option: "Inquiring about Consulting Services" },
    {
      id: 2,
      option: "Registering for an Exam",
    },
    {
      id: 3,
      option: "Other",
    },
  ];

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueCopy = [...checkboxes];
    // // update checkbox value
    // valueCopy[index] = e.target.checked ? e.target.value : null;
    // // send data to react hook form
    // field.onChange(valueCopy);
    // // update local state
    // setValue(valueCopy);
    // console.log("change", event.target.value);
  };

  const validation = Yup.object().shape({
    chooseCb: Yup.bool().oneOf([true], "Checkbox selection is required"),
  });
  const optionsForm = { resolver: yupResolver(validation) };
  //   const { errors } = formState;

  console.log(data);
  return (
    <div className="border-4 border-black rounded-xl pl-10 pt-10 pb-10 pr-10 bg-white">
      <h1 className="font-bold text-center underline">Contact Form</h1>
      <div className="mt-5">
        <h1 className="">
          Reach out to us for consultation services, course registration,
          general questions and information, and any thing we can help with.
        </h1>
      </div>
      <form
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
        className="flex flex-col"
      >
        <input
          {...register("fullName")}
          placeholder="Full Name"
          className="h-20 mt-5 mb-5 border-2 rounded-xl pl-5"
        />
        <input
          {...register("email")}
          placeholder="Email"
          className="h-20 mt-5 mb-5 border-2 rounded-xl pl-5"
        />
        <input
          {...register("phone")}
          placeholder="Phone number (optional)"
          className="h-20 mt-5 mb-5 border-2 rounded-xl pl-5"
        />
        <div className="flex flex-col">
          <h1> What are you interested in? </h1>
          <div className="ml-10">
            <div className="flex ">
              <input
                type="checkbox"
                value="Registering for an exam"
                {...register("maths", {
                  required: {
                    value: true,
                    message: "Maths is required",
                  },
                })}
                className="h-5 w-5 mt-auto mb-auto mr-10"
              />
              <label> Registering for an exam </label>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                value="Registering for an exam"
                {...register("maths", {
                  required: {
                    value: true,
                    message: "Maths is required",
                  },
                })}
                className="h-5 w-5 mt-auto mb-auto mr-10"
              />
              <label> Consulting Services for my Business </label>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                value="Registering for an exam"
                {...register("maths", {
                  required: {
                    value: true,
                    message: "Maths is required",
                  },
                })}
                className="h-5 w-5 mt-auto mb-auto mr-10"
              />
              <label> Career Mentoring & Coaching </label>
            </div>

            <div className="flex">
              <input
                type="checkbox"
                value="Registering for an exam"
                {...register("maths", {
                  required: {
                    value: true,
                    message: "Maths is required",
                  },
                })}
                className="h-5 w-5 mt-auto mb-auto mr-10"
              />
              <label> Other </label>
            </div>
          </div>
        </div>

        <textarea
          {...register("other_extra")}
          placeholder="Other... "
          className="h-20 mt-5 mb-5 border-2 rounded-xl pl-5 pt-2"
        />
        <h1> Is there anything else we can help with? </h1>
        <textarea
          {...register("other_extra")}
          placeholder="optional"
          className="h-20 mt-5 mb-5 border-2 rounded-xl pl-5 pt-2"
        />

        <div className="border-2 hover:bg-gray-100 pl-10 pr-10 ml-auto mr-auto rounded-xl">
          <input type="submit" value="Submit" className="" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
