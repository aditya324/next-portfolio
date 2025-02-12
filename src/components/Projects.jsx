import React from "react";
import Card from "./Card";
import { Poppins } from "next/font/google";
const popins = Poppins({ subsets: ["latin"], weight: "300" });

import biotech from "../../public/images/Biotech-Maali-Logo-website-use 7.png";
import banner from "../../public/images/projects_cover_knolwex.png-removebg-preview 1.png";
import mavin from "../../public/images/maven.png";
import banner2 from "../../public/images/banner2.png";
import banner3 from "../../public/images/banner3.png";
import max from "../../public/images/maxdrive_black 3.png";
import itbaga from "../../public/images/itdaga.png";
const Projects = () => {
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
    <div className="bg-white text-black">
      {/* Header Section */}
      <div className="lg:pl-20 pl-5 pt-6">
        <p
          className="text-3xl font-medium"
          style={{ fontFamily: popins.style.fontFamily }}
        >
          Featured Projects
        </p>
        <p
          className="font-light lg:text-[18px] lg:leading-[33px] text-[12px] leading-[17px] pt-4 "
          style={{ fontFamily: popins.style.fontFamily }}
        >
          Find out about my works: read through my case studies, have a look at
          final designs and <br /> try out prototypes I’ve built.
        </p>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  lg:ml-8 ml-0 lg:px-12 px-5 gap-5 xl:gap-10 2xl:gap-12 pt-5">
        {projects.map((project, index) => (
          <Card
            key={index}
            logo={project.logo}
            about={project.about}
            banner={project.banner}
            route={project.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
