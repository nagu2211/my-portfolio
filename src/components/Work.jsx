import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../Variants";
//img
import Img1 from "../assets/qwerty.png";
import Img2 from "../assets/mywatch.png";
import Img3 from "../assets/alwaysFresh.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">My Latest Work.</h2>
              <p className="max-w-sm mb-14">
              I show you my latest academic projects and personal designs, hoping that we can work together!
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* image */}
            <a href="https://nagu2211.github.io/coderjs/" target="_blank">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div
                className="group-hover:bg-black/30 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">ECOMMERCE</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">QWERTY</span>
              </div>
            </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-6"
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">ECOMMERCE</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">MY WATCH</span>
              </div>
            </div>
            {/* image */}
            <a href="https://alwaysfresh.onrender.com/" target="_blank">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">ECOMMERCE</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">ALWAYS FRESH</span>
              </div>
            </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
