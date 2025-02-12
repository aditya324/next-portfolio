import React from "react";
import Image from "next/image";
import framer from "../../public/images/newbannner.png";
import { Ibarra_Real_Nova, Poppins } from "next/font/google";
import { motion } from "framer-motion"; // Import Framer Motion

const dance = Ibarra_Real_Nova({ subsets: ["latin"], weight: ["400", "700"] });
const popins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

// Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Banner = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center md:pl-10 lg:pl-20 px-6 md:px-0 text-center md:text-left">
        {/* Animated Text: Hi I'm Mallikjan */}
        <motion.div
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-white lg:mt-0 md:mt-0 mt-5"
          style={{ fontFamily: popins.style.fontFamily }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {"Hi I'm Mallikjan".split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Animated Text: UI/UX Designer */}
        <motion.p
          className="text-[#F87B00] text-lg md:text-xl tracking-[0.2em] uppercase mt-2 md:mt-4 lg:ml-32 ml-0"
          style={{ fontFamily: popins.style.fontFamily }}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }} // Delay to start after the first text
        >
          UI/UX Designer
        </motion.p>

        {/* Animated Text: Empathize, Design, Transform */}
        <motion.div
          className="space-y-2 md:space-y-4 mt-4 md:mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }} // Delay to start after the second text
        >
          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl text-white"
            variants={wordVariants}
          >
            Empathize,
          </motion.p>
          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl text-white"
            variants={wordVariants}
          >
            <span className={`${dance.className} text-[#F87B00] italic`}>
              Design,
            </span>{" "}
            Transform
          </motion.p>
        </motion.div>
      </div>

      {/* Image Container */}
      <div className="w-full md:w-1/2 lg:w-auto mt-8 md:mt-0">
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
