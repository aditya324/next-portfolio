"use client";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
import projectimage from "../../../public/images/projectimage.png";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@/components/Card";
import dynamic from "next/dynamic";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "500" });

const Page = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1025, // For screens <= 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-start px-4 md:px-8 lg:px-12 lg:mt-0 md:mt-0 mt-10">
      {/* Project Name */}
      <h1
        className="text-2xl md:text-3xl lg:text-4xl mb-4"
        style={{ fontFamily: poppins.style.fontFamily }}
      >
        Project Name
      </h1>

      {/* Project Image */}
      <div className="flex justify-center">
        <Image
          src="/images/project.png"
          alt="Project Image"
          width={1470}
          height={100}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Overview, Role, Toolkit */}
      <div className="mt-4 w-full">
        <p
          className="text-base md:text-lg lg:text-[20px] font-normal leading-[27px] text-left p-2 md:p-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <strong className="font-bold">Overview:</strong> Knowledge is probably
          the greatest power of all. Affordable education has become possible
          over the years even thanks to technology.
        </p>
        <p
          className="text-base md:text-lg lg:text-[20px] font-normal leading-[27px] text-left p-2 md:p-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <strong className="font-bold">Role:</strong> UX Researcher, UX/UI
          designer
        </p>
        <p
          className="text-base md:text-lg lg:text-[20px] font-normal leading-[27px] text-left p-2 md:p-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <strong className="font-bold">Toolkit:</strong> Figma, Adobe CC,
          FigJam, Pencil and paper
        </p>

        {/* Test Project Prototype Button */}
        <button className="border p-2 mt-5 rounded-md border-gray-500 md:w-[280px] w-[250px] h-[51px] bg-white text-black relative shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] transition-all ml-2 md:ml-4">
          Test Project Prototype
        </button>

        {/* My Approach Section */}
        <div className="w-full mt-6">
          <p
            className="font-bold text-lg md:text-xl lg:text-2xl p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            My Approach: Cultivating Mobile Excellence
          </p>
          <p
            className="font-light text-sm md:text-base lg:text-lg p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            In my mobile application development journey, I have honed a
            systematic and strategic approach that centers around innovation,
            user-centric design, and effective problem-solving. I believe in
            meticulous planning and execution, with a focus on crafting visually
            engaging and highly functional mobile applications.
          </p>
        </div>

        {/* Vision and Innovation Section */}
        <div className="w-full">
          <p
            className="font-bold text-lg md:text-xl lg:text-2xl p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Vision and Innovation
          </p>
          <p
            className="font-light text-sm md:text-base lg:text-lg p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            In my mobile application development journey, I have honed a
            systematic and strategic approach that centers around innovation,
            user-centric design, and effective problem-solving. I believe in
            meticulous planning and execution, with a focus on crafting visually
            engaging and highly functional mobile applications.
          </p>
        </div>

        {/* Repeat similar structure for other sections... */}

        {/* Test Project Prototype Section */}
        <div className="w-full">
          <p
            className="font-light text-2xl md:text-3xl text-center p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Test <span className="text-[#F87B00]">Project Prototype</span>
          </p>

          {/* Black Line Below */}
          <div className="w-full h-[2px] md:h-[3px] bg-black my-2 md:my-4"></div>

          {/* Project Image Container */}
          <div className="bg-[#FDF9F8] border-[#ECECEC] border-4 w-full h-auto md:h-[710px] p-4 md:p-8 lg:px-56">
            <div className="flex justify-center items-center h-full">
              <Image
                src={projectimage}
                alt="projectimage"
                width={700}
                height={700}
                className=" object-contain"
              />
            </div>
          </div>
        </div>

        {/* Other Projects Section */}
        <div className="w-full mt-6">
          <p
            className="font-light text-2xl md:text-3xl text-left p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Other <span className="text-[#F87B00]">Projects</span>
          </p>

          {/* Slider */}
          <Slider {...settings} className=" ">
            <Card />
            <Card />
            <Card />
            <Card />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Page;