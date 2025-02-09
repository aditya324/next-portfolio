"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import phone from "../../public/images/phone.png";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";

const popins = Poppins({ subsets: ["latin"], weight: "300" });

interface CardProps {
  key?: number;
  logo: StaticImageData;
  about?: string;
  banner: StaticImageData;
  
  route: string;
}

const Card: React.FC<CardProps> = ({ logo, about, banner, route,key }) => {




  const router=useRouter()


  const handleClick = () => {
    router.push(route);
  };
  

  return (
    <div className="relative w-full lg:w-[450px] md:w-[320px] h-[551px] bg-white rounded-t-xl shadow-lg border border-gray-200 overflow-hidden group">
      {/* Top Content */}
      <div className="p-6 z-10 relative">
        <Image src={logo} alt="App Screenshot" width={100} height={100} />
        <p
          className={`lg:text-lg test-base font-normal text-[#343434] leading-relaxed mt-2 font-${popins.className}`}
          style={{ fontFamily: popins.style.fontFamily }}
        >
          {about}
        </p>
        <button  className="flex items-center text-[#FF6B00] font-bold mt-4 hover:opacity-90" onClick={handleClick}>
          Read Case Study
          <svg
            className="ml-1 w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Image Container */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 z-10 w-[280px] h-[210px] sm:w-[300px] sm:h-[250px] transition-all duration-300 transform hover:scale-125">
        <Image
          src={banner}
          alt="App Screenshot"
          width={320}
          height={280}
          className="w-full h-full object-contain transition-all duration-300"
        />
      </div>

      {/* Red Background */}
      <div className="absolute bottom-0 left-0 w-full rounded-t-3xl h-52 bg-[#FF5959] z-0 transition-all duration-300 group-hover:rounded-t-none" />
    </div>
  );
};

export default Card;
