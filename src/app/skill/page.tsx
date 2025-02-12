import SkillCard from "@/components/SkillCard";
import { Poppins } from "next/font/google";
import React from "react";
import framer from "../../../public/images/Container.png";
import figma from "../../../public/images/figma.png";
import Image from "next/image";
import Notion from "../../../public/images/notion.png";
import gpt from "../../../public/images/gpt.png";
import photoshop from "../../../public/images/photoshop.png"
import canva from "../../../public/images/canva.png"
import video from "../../../public/images/video.png"
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
//todo:mapping skills and alligning last card
const Page = () => {
  const skills = [
    {
      name: "framer",
      logo: framer,
      work: "web design",
      desc: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to life, allowing stakeholders to experience the user flow and interactions before development begins. It's invaluable for refining the user experience.",
    },
    {
      name: "Figma",
      logo: figma,
      work: "Collaborative Design",
      desc: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based approach streamlines the design process.",
    },
    {
      name: "Notion",
      logo: Notion,
      work: "Project Management",
      desc: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to project timelines is in one place.",
    },
    {
      name: "Chat Gpt",
      logo: gpt,
      work: "Content Generation ",
      desc: "ChatGPT is my content generation and assistance tool. I leverage it for content ideas, copywriting, and problem-solving. It provides invaluable insights and suggestions that enhance the quality of my projects.",
    },
    {
      name: "Photoshop",
      logo: photoshop,
      work: "Image Manipulation ",
      desc: "Photoshop is my image editing Swiss army knife. I rely on it for retouching photos, creating graphics, and optimizing images for web use. It ensures that visual elements are pixel- perfect.",
    },
    {
      name: "Canva",
      logo: canva,
      work: "Vector Graphics/ Video editor ",
      desc: "Canva is a user-friendly graphic design platform offering templates and customization tools for creating professional visuals without design expertise. Its drag-and-drop interface simplifies the process for diverse content creation.",
    },
    {
      name: "Canva",
      logo: video,
      work: "Video editor ",
      desc: "Kdenlive is an open-source video editing software. It provides a user-friendly interface with advanced editing features, making it a powerful tool for video content creators on Linux and other platforms.",
    },
  ];

  return (
    <div className="bg-white  flex flex-col w-full">
      <div className="w-full">
        <p
          className="text-4xl  mt-4 text-black p-12 text-center"
          style={{ fontFamily: poppins.style.fontFamily }}
        >
          My Skill Stack: Crafting{" "}
          <span className="text-[#F87B00]">Digital</span> Solutions
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {
          skills.map((skills:any,index:number)=>{
            return (
              <SkillCard key={index} skills={skills} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Page;
