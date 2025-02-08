"use client";
import { sendEmail } from "@/actions/email";
import { Poppins } from "next/font/google";
import React from "react";
import { useFormState } from "react-dom";
import { toast } from 'react-hot-toast';

const popins = Poppins({ subsets: ["latin"], weight: "300" });

interface EmailResponse {
  success: boolean;
  message: string;
}
const Contact = () => {
 
  const [state, formAction] = useFormState<EmailResponse, FormData>(sendEmail, {
    success: false,
    message: '',
  });

if(state.success) {
  toast.success(state.message);
}
else if(state.message) {
  toast.error(state.message);
}
  return (
    <div className="flex justify-center bg-white text-black  px-4 sm:px-6 md:px-3 lg:px-20 lg:pt-10">
      {/* Container for text and form */}
      <div className="flex flex-col md:flex-row lg:max-w-5xl w-full md:gap-8   lg:gap-10 items-center">
        {/* Left side - Text */}
        <div className="flex-1 text-left md:max-w-md lg:max-w-lg  ">
          <p
            className="text-4xl md:text-5xl lg:text-6xl pb-3"
            style={{ fontFamily: popins.style.fontFamily }}
          >
            Let's Work
          </p>
          <p
            className="text-4xl md:text-5xl lg:text-6xl pb-3  text-[#F87B00]"
            style={{ fontFamily: popins.style.fontFamily }}
          >
            Together
          </p>
          <p
            className="mt-4 text-sm sm:text-base  max-w-sm md:max-w-xs lg:max-w-sm"
            style={{ fontFamily: popins.style.fontFamily }}
          >
            Let’s connect! Whether you’re looking for answers or want to discuss
            a potential collaboration, I’m here to assist. Fill out the form
            below, and let’s get started!
          </p>
        </div>

        {/* Right side - Form */}
        <div className="flex-1 w-full md:w-1/2 lg:w-2/5 lg:mt-0 md:mt-0 mt-5">
          <form action={formAction}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-2 border border-gray-300 rounded-lg h-24"
              />
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-transparent w-48 text-[#636363] p-3 rounded-2xl border-2 border-gray-300"
              >
                Send Message
              </button>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
