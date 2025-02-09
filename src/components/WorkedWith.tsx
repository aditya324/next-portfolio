"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tata from "../../public/images/tata.png";
import itdaga from "../../public/images/itdaga.png";
import policonn from "../../public/images/policonn.png";
import moto from "../../public/images/moto.png";
import maven from "../../public/images/maven.png";
import { Poppins } from 'next/font/google';

const Slider = dynamic(() => import('react-slick'), { ssr: false });
const popins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });
const WorkedWith = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const images = [
    { src: tata, alt: "Company 1" },
    { src: moto, alt: "Company 2" },
    { src: policonn, alt: "Company 3" },
    { src: itdaga, alt: "Company 4" },
    { src: maven, alt: "Company 5" },
  ];

  return (
    <div className="bg-white text-black pb-20">
      <div className="pl-12 pb-6">
        <p className="text-3xl font-medium" style={{ fontFamily: popins.style.fontFamily }}>I Worked With</p>
      </div>
      <div className="w-full border border-y-4   p-5">
        <div className=" mx-auto overflow-hidden">
          {
             <Slider {...settings}>
             {images.map((image, index) => (
               <div key={index} className="h-16 flex items-center justify-center">
                 <div className="px-4 flex items-center justify-center h-full">
                   <Image
                     src={image.src}
                     alt={image.alt}
                     width={150}
                     height={60}
                     className="object-contain w-auto h-20 mt-10"
                   />
                 </div>
               </div>
             ))}
           </Slider>
          }
        </div>
      </div>
    </div>
  );
};

export default WorkedWith;