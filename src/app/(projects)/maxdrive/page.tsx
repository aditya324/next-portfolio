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
        Maxdrive - App
      </h1>

      {/* Project Image */}
      <div className="flex justify-center">
        <Image
          src="/images/maxdrive.png"
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
          <strong className="font-bold">Overview:</strong>MaxDrive is a
          cutting-edge bike engine oil sales application designed to streamline
          sales operations for field representatives. Tailored for sales
          personnel managing orders from mechanics and retail shops, the app
          simplifies order management through its user-friendly interface. With
          features like garage registration, invoice generation, attendance
          tracking, product catalog access, and exclusive offers, MaxDrive
          enhances efficiency while providing a seamless experience for both
          sales teams and customers.
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
            Throughout my involvement in the development of MaxDrive, I adopted
            a systematic and strategic approach cantered around innovation,
            user-centric design, and problem-solving. My focus was on meticulous
            planning and execution, ensuring a visually engaging and highly
            functional application tailored to the needs of sales personnel.
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
            Collaborated with stakeholders to align the app’s functionality with
            the vision of empowering sales teams. Contributed to innovative
            features such as real-time order placement, garage management tools,
            and a roadmap for future integration of AI-based sales predictions
            and inventory tracking.
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
            Used qualitative and quantitative research methods to identify pain
            points such as order tracking issues and attendance monitoring.
            Partnered with developers to implement solutions like a GPS-enabled
            attendance tracker, detailed sales analytics, and streamlined
            catalog navigation for quick product selection.
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
            Used qualitative and quantitative research methods to identify pain
            points such as order tracking issues and attendance monitoring.
            Partnered with developers to implement solutions like a GPS-enabled
            attendance tracker, detailed sales analytics, and streamlined
            catalog navigation for quick product selection.
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
            Worked as the sole UI/UX designer to develop an intuitive interface
            tailored to the needs of sales personnel. Designed features like
            quick order placement, easy navigation through the product catalog,
            and a dedicated offers section to simplify day-to-day tasks for
            sales representatives.
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
            Collaborated closely with stakeholders to align app features with
            user requirements, such as a simplified invoice generation system,
            seamless garage addition functionality, and a secure communication
            channel for accessing real-time offers and promotions.
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
            Helped shape an app that was widely appreciated for its simplicity
            and functionality, resulting in a 40% boost in sales team
            productivity. The app enhanced order accuracy, reduced processing
            times, and improved overall customer satisfaction, making MaxDrive
            an indispensable tool for sales operations.
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
