import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import webdev from '../assets/frame1.png'
import csspre from '../assets/frame2.png'
import jslib from '../assets/frame3.png'
import design from '../assets/frame4.png'
import aditional from '../assets/frame5.png'
import { Link } from "react-scroll";

const services = [
  {
    name: "Web development",
    description:
    <img src={webdev} alt="" />,
    link: "Learn more",
  },
  {
    name: "Preprocessors and Frameworks",
    description:
    <img src={csspre} alt="" />,
    link: "Learn more",
  },
  {
    name: "JS Libraries and Frameworks",
    description:
    <img src={jslib} alt="" />,
    link: "Learn more",
  },
  {
    name: "Design and Editing Tools",
    description:
    <img src={design} alt="" />,
    link: "Learn more",
  },
  {
    name: "Additional Services and Tools",
    description:
    <img src={aditional} alt="" />,
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat bg-cover
          mb-12 lg:mb-0 p-2"
          >
            <h2 className="h2 text-accent mb-6">My knowledge</h2>
            <h3 className="h3 max-w-[455px] mb-16 text-black dark:text-white">
            I am a front-end developer with additional back-end knowledge
            </h3>
            <Link to="work" smooth={true} spy={true} isDynamic={true}>
                
            <button className="btn btn-sm">See my work</button>
              </Link>
          </motion.div>
          {/* services */}
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 ">
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b  border-black/20 dark:border-white/20 h-[146px]
                  mb-[7px] flex lg:h-[120px]"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4
                        className="text-[20px] tracking-wider
                    font-primary font-semibold mb-4 text-black dark:text-white"
                      >
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
