"use client";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
import projectimage from "../../../../public/images/projectimage.png";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@/components/Card";
import dynamic from "next/dynamic";

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
      route: "/biotech",
    },
    {
      logo: mavin,
      about:
        "MoveonWheels offers a seamless, eco-friendly bike rental experience with flexible plans, well-maintained bikes, and hassle-free booking.",
      banner: banner2,
      route: "/maven",
    },
    {
      logo: mavin,
      about:
        "MoveonWheels offers a seamless, eco-friendly bike rental experience with flexible plans, well-maintained bikes, and hassle-free booking.",
      banner: banner,
      route: "/mavenwebsite",
    },
    {
      logo: biotech,
      about:
        "BiotechMaali's Online Plant Store offers a seamless, eco-friendly shopping experience with curated plants, tools, and sustainable solutions.",
      banner: banner3,
      route: "/biotechweb",
    },
    {
      logo: max,
      about:
        "MaxDrive streamlines bike engine oil sales with easy order management, garage registration, invoicing, and exclusive offers for sales teams.",
      banner: banner3,
      route: "/maxdrive",
    },
    {
      logo: itbaga,
      about:
        "ITdaga empowers tech professionals with innovative tools, resources, and a collaborative platform for seamless learning and engagement.",
      banner: banner3,
      route: "/itdaga",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-start px-4 md:px-8 lg:px-12 lg:mt-0 md:mt-0 mt-10">
      {/* Project Name */}
      <h1
        className="text-2xl md:text-3xl lg:text-4xl mb-4"
        style={{ fontFamily: poppins.style.fontFamily }}
      >
        ITDaga - Website
      </h1>

      {/* Project Image */}
      <div className="flex justify-center">
        <Image
          src="/images/itdagawebsite.jpg"
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
          <strong className="font-bold">Overview:</strong> ITdaga is a
          cutting-edge online platform designed to empower developers, tech
          enthusiasts, and industry professionals with tools, resources, and
          insights to thrive in the ever-evolving tech landscape. With a focus
          on accessibility, engagement, and innovation, ITdaga provides a
          user-friendly interface, dynamic features, and an interactive
          environment that fosters collaboration and learning. The platform
          seamlessly integrates the latest technological advancements, ensuring
          a streamlined and engaging experience for its users.
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
            In spearheading the development of the ITdaga website, my commitment
            revolves around pioneering technological innovation. I am dedicated
            to seamlessly marrying cutting-edge functionality with a visually
            captivating and user-centric online platform.
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
            At the core of the ITdaga website development is a visionary
            approach that combines forward-thinking design and technological
            advancements. This results in a website that not only looks
            impressive but also leverages the latest technologies to provide a
            seamless and dynamic user experience.
          </p>
        </div>
        <div className="w-full">
          <p
            className="font-bold text-lg md:text-xl lg:text-2xl p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Analyzing Unique Challenges
          </p>
          <p
            className="font-light text-sm md:text-base lg:text-lg p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Recognizing the distinctive challenges faced by ITdaga, I undertook
            a comprehensive analysis to pinpoint specific needs and
            requirements. This thorough examination laid the foundation for a
            bespoke design strategy, tailored to address the startup's unique
            goals and aspirations in the ever-evolving tech landscape.
          </p>
        </div>
        <div className="w-full">
          <p
            className="font-bold text-lg md:text-xl lg:text-2xl p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Strategic Problem-Solving
          </p>
          <p
            className="font-light text-sm md:text-base lg:text-lg p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Encountering intricate challenges during the coding and development
            phases, I employed strategic problem-solving techniques to navigate
            complexities effectively. This required a blend of analytical
            thinking and collaborative efforts to arrive at solutions that
            elevate both the functionality and aesthetics of the ITdaga website.
          </p>
        </div>
        <div className="w-full">
          <p
            className="font-bold text-lg md:text-xl lg:text-2xl p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            User-Driven Development
          </p>
          <p
            className="font-light text-sm md:text-base lg:text-lg p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            The design philosophy for ITdaga revolves around a user-driven
            approach. Every coding element is meticulously crafted with
            end-users in mind, ensuring an intuitive and enjoyable experience
            that aligns seamlessly with the startup's technological objectives.
          </p>
        </div>
        <div className="w-full">
          <p
            className="font-bold text-lg md:text-xl lg:text-2xl p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Adapting to User Needs
          </p>
          <p
            className="font-light text-sm md:text-base lg:text-lg p-2 md:p-4"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            To cater to the diverse needs of developers, tech enthusiasts, and
            industry professionals, the ITdaga website incorporates features and
            functionalities that enhance accessibility and engagement. User
            feedback and preferences played a pivotal role in shaping the final
            product, fostering a positive and interactive online environment
            within the dynamic tech community.
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
              <iframe
                width="1000"
                height="450"
                src="https://embed.figma.com/proto/Lgj4mWQa2EwT5DS4dprAwl/ITDaga?node-id=49-3018&amp;scaling=scale-down-width&amp;content-scaling=fixed&amp;page-id=0%3A1&amp;embed-host=share"
                sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
              ></iframe>
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
                  route={project.route as string}
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
