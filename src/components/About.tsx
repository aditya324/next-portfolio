import React from "react";
import { Poppins } from "next/font/google";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import about from "../../public/images/thumb 2.png";


const popins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

const About = () => {


  const handleDownload = () => {
    // Path to the file in the public folder
    const fileUrl = "/mallikcv.pdf";
    const fileName = "mallikcv.pdf";
  
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  
  return (
    <div id="about" className="bg-white text-black flex justify-start p-5 lg:ml-24 ml-0 mt-24">
      {/* Container for image and text */}
      <div className="flex flex-col lg:flex-row max-w-5xl w-full lg:max-h-full">
        {/* Image container */}
        <div className="flex-shrink-0 lg:mr-8  lg:mb-0">
          <p
            className="text-3xl font-medium"
            style={{ fontFamily: popins.style.fontFamily }}
          >
            About
          </p>
          <div className="lg:mb-24 mb-10 ">
            <Image
              src={about}
              alt="App Screenshot"
              width={400}
              height={380}
              className=""
            />
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
            className="text-lg font-medium lg:pl-36  text-[#F87B00]"
            style={{ fontFamily: popins.style.fontFamily }}
          >
            UI/UX Designer
          </p>
          {/* Updated paragraph with improved spacing */}
          <p
            className="text-gray-700 lg:text-[18px] leading-[44px] text-sm font-normal lg:w-[700px]  tracking-[0.02em] mb-6"
            style={{ fontFamily: popins.style.fontFamily }}
          >
            I am a UX/UI Designer with 3+ years of experience in B2B and B2C web
            applications for E-Commerce, Florist, Bike Rental, Banking, and
            Education industries. I specialize in responsive design,
            accessibility, localization, and seamless user experiences across
            regions. My expertise includes wireframing, prototyping, heuristic
            evaluation, and user journey mapping. I have designed CRM software,
            SaaS platforms, and web applications using Google Material Design
            and HIG. Proficient in Bootstrap, CSS3, HTML5, and WordPress, I
            prioritize user needs, business goals, and brand engagement.
          </p>
          <div className="flex  gap-4 lg:gap-10">
            <button className="border p-2 rounded-md border-gray-500" onClick={handleDownload}>
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
