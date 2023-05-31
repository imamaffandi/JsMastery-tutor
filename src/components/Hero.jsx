import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { desert } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <video
        autoPlay
        loop
        muted
        className="h-full object-cover w-full z-0 w-auto top-0 left-0 min-h-full"
      >
        <source src={desert} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 z-10">
          <div className="w-5 h-5 rounded-full bg-[#C5CBE3]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="z-10">
          <h1 className={`${styles.heroHeadText}text-white`}>
            Hi I'm <span className="text-[#1F4068]">Imam Affandi</span>
          </h1>
          <p className={`${styles.heroSubText}mt-2 text-white-100 `}>
            Professional Front-End Web Developer for Modern and Responsive
            Websites
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 w-full flex justify-center items-center  ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
