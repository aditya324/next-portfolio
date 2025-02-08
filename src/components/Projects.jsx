import React from "react";
import Card from "./Card";
import { Poppins } from "next/font/google";
const popins = Poppins({ subsets: ["latin"], weight: "300" });
const Projects = () => {
  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <div className="lg:pl-12 pl-5 pt-6">
      <p className="text-3xl font-medium" style={{ fontFamily: popins.style.fontFamily }}>Featured Projects</p>
        <p className="font-light lg:text-2xl text-lg pt-4 "
        style={{ fontFamily: popins.style.fontFamily }}
        >
          Find out about my works: read through my case studies, have a look at
          final designs and <br /> try out prototypes I’ve built.
        </p>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-8 ml-0 lg:px-12 px-5 gap-5 lg:gap-10 pt-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;