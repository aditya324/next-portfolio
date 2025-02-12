import Image from "next/image";
import React from "react";


interface SkillCardProps {
  skills: {
    name: string;
    logo: any; // Use `StaticImageData` if you're using Next.js Image
    work: string;
    desc: string;
  };
}
const SkillCard: React.FC<SkillCardProps> = ({ skills }) => {
  return (
    <div className="lg:w-[590px] border border-gray-200 bg-[#FAFAFA] rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 lg:mx-0 mx-5">
      {/* Image and Title Section */}
      <div className="flex items-center space-x-4">
        {/* Image Container */}
        <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-lg">
          <Image
            src={skills.logo}
            alt="Framer Icon"
            className="w-10 h-10"
          />
        </div>

        {/* Title and Subtitle */}
        <div>
          <p className="text-lg font-semibold text-gray-800">{skills.name}</p>
          <p className="text-sm text-gray-500">{skills.work}</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-4">
        <p className="text-sm text-gray-600 ">
          {skills.desc}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;