"use client";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
import projectimage from "../../../../public/images/projectimage.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@/components/Card";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import biotech from "../../../../public/images/Biotech-Maali-Logo-website-use 7.png";
import banner from "../../../../public/images/projects_cover_knolwex.png-removebg-preview 1.png";
import mavin from "../../../../public/images/maven.png";
import banner2 from "../../../../public/images/banner2.png";
import banner3 from "../../../../public/images/banner3.png";
import max from "../../../../public/images/maxdrive_black 3.png";
import itbaga from "../../../../public/images/itdaga.png";

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

  const projects = [
    {
      logo: biotech,
      about:
        "BiotechMaali's Online Plant Store offers a seamless, eco-friendly shopping experience with curated plants, tools, and sustainable solutions.",
      banner: banner,
      route:  "/biotech"
    },
    {
      logo: mavin,
      about:
        "MoveonWheels offers a seamless, eco-friendly bike rental experience with flexible plans, well-maintained bikes, and hassle-free booking.",
      banner: banner2,
      route:  "/maven"
    },
    {
      logo: mavin,
      about:
        "MoveonWheels offers a seamless, eco-friendly bike rental experience with flexible plans, well-maintained bikes, and hassle-free booking.",
      banner: banner,
      route:  "/mavenwebsite"
    },
    {
      logo: biotech,
      about:
        "BiotechMaali's Online Plant Store offers a seamless, eco-friendly shopping experience with curated plants, tools, and sustainable solutions.",
      banner: banner3,
      route:  "/biotechweb"
    },
    {
      logo: max,
      about:
        "MaxDrive streamlines bike engine oil sales with easy order management, garage registration, invoicing, and exclusive offers for sales teams.",
      banner: banner3,
      route:  "/maxdrive"
    },
    {
      logo: itbaga,
      about:
        "ITdaga empowers tech professionals with innovative tools, resources, and a collaborative platform for seamless learning and engagement.",
      banner: banner3,
      route:  "/itdaga"
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-start px-4 md:px-8 lg:px-12 lg:mt-0 md:mt-0 mt-10">
      {/* Project Name */}
      <h1
        className="text-2xl md:text-3xl lg:text-4xl mb-4"
        style={{ fontFamily: poppins.style.fontFamily }}
      >
        Boitech Maali - App
      </h1>

      {/* Project Image */}
      <div className="flex justify-center">
        <Image
          src="/images/biotechframe.png"
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
          <strong className="font-bold">Overview:</strong>BiotechMaali's Online
          Plant Store is a sustainable e-commerce platform designed to bring a
          curated selection of plants, gardening tools, and accessories to urban
          dwellers. With a user-friendly interface and personalized
          recommendations, it ensures a seamless shopping experience. The
          project promotes greener living through educational resources,
          subscription services, and eco-friendly practices.
        </p>
        <p
          className="text-base md:text-lg lg:text-[20px] font-normal leading-[27px] text-left p-2 md:p-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <strong className="font-bold">Role:</strong>UX Researcher, UI designer
        </p>
        <p
          className="text-base md:text-lg lg:text-[20px] font-normal leading-[27px] text-left p-2 md:p-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <strong className="font-bold">Toolkit:</strong> Figma, Adobe
          CC(Photoshop & Illustrator), FigJam, Jira, ChatGPT, Midjourney, Miro,
          Material Design Guidelines, Google Analytics, Pencil, paper
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
            Collaborated with stakeholders to align user insights with the
            project’s vision of sustainable living, contributing to innovative
            features such as subscription boxes, gifting options, and a future
            roadmap for AR-based plant visualization and live gardening
            consultation
          </p>
        </div>
        <div className="w-full">
          <p
            className="font-bold text-lg md:text-xl lg:text-2xl p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Identifying Unique Challenges
          </p>
          <p
            className="font-light text-sm md:text-base lg:text-lg p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Conducted in-depth regional climate analysis to guide the
            implementation of location-based plant recommendations. Researched
            user delivery concerns, leading to the successful integration of
            real-time order tracking and optimized packaging solutions
          </p>
        </div>
        <div className="w-full">
          <p
            className="font-bold text-lg md:text-xl lg:text-2xl p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Resolving Complex Problems
          </p>
          <p
            className="font-light text-sm md:text-base lg:text-lg p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Utilized qualitative and quantitative research methods to identify
            challenges such as plant care education gaps and checkout
            inefficiencies. Partnered with developers to integrate solutions
            like interactive care guides, Scanner Code, and a streamlined
            payment gateway
          </p>
        </div>
        <div className="w-full">
          <p
            className="font-bold text-lg md:text-xl lg:text-2xl p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            User-Centric Design
          </p>
          <p
            className="font-light text-sm md:text-base lg:text-lg p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Collaborated closely with the product team as the sole UI/UX
            designer to create an intuitive interface, incorporating features
            like personalized plant recommendations, quick search functionality,
            and seamless navigation, ensuring a user-friendly and satisfying
            experience
          </p>
        </div>
        <div className="w-full">
          <p
            className="font-bold text-lg md:text-xl lg:text-2xl p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Meeting User Needs
          </p>
          <p
            className="font-light text-sm md:text-base lg:text-lg p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Collaborated with stakeholders to align user insights with the
            project’s vision of sustainable living, contributing to innovative
            features such as subscription boxes, gifting options, and a future
            roadmap for AR-based plant visualization and live gardening
            consultations
          </p>
        </div>
        <div className="w-full">
          <p
            className="font-bold text-lg md:text-xl lg:text-2xl p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Impact:
          </p>
          <p
            className="font-light text-sm md:text-base lg:text-lg p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Helped shape an app that was praised for its simplicity and
            innovation, driving a 30% increase in user engagement, boosting
            downloads, and making gardening more accessible to urban users.
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
            {projects.map((project, index) => {
              return (
                <Card
                  key={index}
                  logo={project.logo}
                  about={project.about}
                  banner={project.banner}
                  route={project.route}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Page;
