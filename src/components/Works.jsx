import React from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div
        className="relative w-full h-[230px] cursor-pointer"
        onClick={() => window.open(source_code_link, "_blank")}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am excited to offer my services as a web developer for your project.
        With over a year of experience in developing websites for a variety of
        clients, I am confident in my ability to create a stunning and
        functional website that meets your needs. My process begins with a
        thorough understanding of your project requirements and your target
        audience.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {projects.map((projects, index) => (
          <ProjectCard key={projects.name} index={index} {...projects} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
