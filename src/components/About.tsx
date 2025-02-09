
import React from "react";
import { Poppins } from "next/font/google";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import about from "../../public/images/about.png";

const popins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

const About = () => {
  return (
    <div id="about" className="bg-white text-black flex justify-center p-5"> 
      {/* Container for image and text */}
      <div className="flex flex-col lg:flex-row max-w-5xl w-full lg:max-h-[594px]">
        {/* Image container */}
        <div className="flex-shrink-0 lg:mr-8 mb-12 lg:mb-0 ">
        <p className="text-3xl font-medium" style={{ fontFamily: popins.style.fontFamily }}>About</p>
          <div>
            {/* <div className="w-full lg:w-[400px] h-[300px] lg:h-[380px] bg-[#C6C6C6] flex items-center justify-center"></div> */}
          <Image src={about} alt="App Screenshot" width={400} height={380} className="pt-5"/>
          </div>
        </div>

        {/* Text container */}
        <div className="flex flex-col justify-center">
          <p
            className="text-3xl lg:text-4xl font-medium mb-2"
            style={{ fontFamily: popins.style.fontFamily }}
          >
            Hi, I'm Mallikjan
          </p>
          <p
            className="text-lg font-medium lg:pl-36 mb-4 text-[#F87B00]"
            style={{ fontFamily: popins.style.fontFamily }}
          >
            UI/UX Designer
          </p>
          <p
            className="text-gray-700 leading-relaxed lg:text-base text-sm  font-normal lg:w-[569px]"
            style={{ fontFamily: popins.style.fontFamily }}
          >
            With 3 years of experience as a UI/UX designer, I specialize in
            creating seamless and user-friendly application designs that balance
            aesthetic appeal with functionality across diverse devices.
            Proficient in tools like Framer, Figma, and Adobe Creative Suite, I
            excel in user research, prototyping, and empathy mapping, ensuring
            designs are intuitive and tailored to user needs.
          </p>
          <div className="flex mt-6 gap-4 lg:gap-10">
            <button className="border p-2 rounded-md border-gray-500">
              View CV
            </button>
            <button>
              <FaInstagram className="w-8 h-8 lg:w-10 lg:h-10" />
            </button>
            <button>
              <FaLinkedin className="w-8 h-8 lg:w-10 lg:h-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
