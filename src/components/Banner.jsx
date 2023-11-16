import React from "react";
//images
import image from "../assets/avatar.png";
//icons
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import instagram from "react-useanimations/lib/instagram";
import linkedin from "react-useanimations/lib/linkedin";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../Variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12"
        >
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[60px]"
            >
              SANTIAGO <span>ESPINDOLA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[37px] font-secondary
              font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Frontend Dev",
                  3000,
                  "Backend Dev",
                  3000,
                  "creative person",
                  3000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Hi! Thanks for coming here, make yourself comfortable and I'll
              show you who I am and how I got here.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-wmax gap-x-6 items-center mb-12
              mx-auto justify-center lg:mx-0 lg:justify-start "
            >
              <Link to="contact" smooth={true} spy={true} isDynamic={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max
            mx-auto lg:mx-0"
            >
              <a href="https://www.instagram.com/santy_2211/">
                <UseAnimations
                  animation={instagram}
                  size={40}
                  strokeColor="white"
                />
              </a>
              <a href="https://github.com/nagu2211">
                <UseAnimations
                  animation={github}
                  size={40}
                  strokeColor="white"
                />
              </a>
              <a href="https://www.linkedin.com/in/santiago-espindola-a56ba4255/">
                <UseAnimations
                  animation={linkedin}
                  size={40}
                  strokeColor="white"
                />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={image} alt="" className="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
