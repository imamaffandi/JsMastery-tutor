import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient overflow-hidden p-[1px] rounded-[20px] shadow-card"
      >
        <div
          option={{ max: 45, scale: 1, speed: 450 }}
          className={`${styles.cardStyle}  rounded-[20px] overflow-hidden py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col`}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section className="z-20 bg-primary pt-14">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
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
        audience. I will work with you to determine the best approach to design
        and development, including the platform, layout, and features that will
        be necessary to achieve your goals. From there, I will create wireframes
        and prototypes to ensure that the design and functionality are both
        user-friendly and visually appealing. Once the design is finalized, I
        will begin coding the website, using the latest coding standards and
        best practices to ensure that the site is fast, secure, and optimized
        for search engines. Throughout the development process, I will keep you
        informed of my progress and will be open to feedback and revisions to
        ensure that the final product meets your expectations. In addition to my
        technical skills, I am also a strong communicator and project manager,
        ensuring that your project stays on schedule and within budget. Thank
        you for considering me for your web development project. I look forward
        to discussing the details further and answering any questions you may
        have.
      </motion.p>

      <div className={`mt-20 flex flex-wrap justify-center gap-10`}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
