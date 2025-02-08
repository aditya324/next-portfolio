import React from "react";
import Image from "next/image";
import framer from "../../public/images/Frame 427322146.png";
import { Ibarra_Real_Nova, Poppins } from "next/font/google";

const dance = Ibarra_Real_Nova({ subsets: ["latin"], weight: ["400", "700"] });
const popins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Banner = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center md:pl-10 lg:pl-20 px-6 md:px-0 text-center md:text-left">
        <p
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-white lg:mt-0 md:mt-0 mt-5"
          style={{ fontFamily: popins.style.fontFamily }}
        >
          Hi I'm Mallikjan
        </p>

        <p
          className="text-[#F87B00] text-lg md:text-xl tracking-[0.2em] uppercase mt-2 md:mt-4"
          style={{ fontFamily: popins.style.fontFamily }}
        >
          UI/UX Designer
        </p>

        <div className="space-y-2 md:space-y-4 mt-4 md:mt-8">
          <p className="text-3xl md:text-4xl lg:text-5xl text-white">Empathize,</p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-white">
            <span className={`${dance.className} text-[#F87B00]`}>Design,</span> Transform
          </p>
        </div>
      </div>

      {/* Image Container */}
      <div className="w-full md:w-1/2 lg:w-auto  mt-8 md:mt-0">
        <Image
          src={framer}
          alt="Portfolio Image"
          width={650}
          height={550}
          className="object-cover w-full h-auto lg:max-w-[650px] md:max-w-[400px] md:absolute md:bottom-0 md:right-0"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;