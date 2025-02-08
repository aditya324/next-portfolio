import React from "react";

const SkillCard = () => {
  return (
    <div className="lg:w-[590px] border border-gray-200 bg-[#FAFAFA] rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image and Title Section */}
      <div className="flex items-center space-x-4">
        {/* Image Container */}
        <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-lg">
          <img
            src="/images/container.png"
            alt="Framer Icon"
            className="w-10 h-10"
          />
        </div>

        {/* Title and Subtitle */}
        <div>
          <p className="text-lg font-semibold text-gray-800">Framer</p>
          <p className="text-sm text-gray-500">Web Design</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-4">
        <p className="text-sm text-gray-600 ">
          Framer serves as my go-to tool for creating interactive prototypes. I
          use it to bring designs to life, allowing stakeholders to experience
          the user flow and interactions before development begins. It's
          invaluable for refining the user experience.
        </p>
      </div>
    </div>
  );
};

export default SkillCard;