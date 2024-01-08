import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row
        lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[600px] mix-blend-darken dark:mix-blend-lighten bg-top"
          ></motion.div>
          {/* text*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4 text-black dark:text-white">
              I'm Frontend Developer & Full Stack Student from Argentina
            </h3>
            <p className="mb-6 text-black dark:text-white">
              Passionate about programming, creating, and imagining, with a
              dedicated two-year study in the field. Quick learner and proactive
              team player.
            </p>
            <h5 className="text-black dark:text-white">Work Experience:</h5>
            <ul className="list-disc text-black dark:text-white">
              <li>+2 years in 2020. Retail and wholesale sales.</li>
              <li>
                0.5 years to date. Translation of courses and books for English
                teachers into Spanish.
              </li>
              <li>
                1 year to date. Managing a local store specializing in fresh and
                food products.
              </li>
            </ul>

            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 pt-5">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  B{inView ? <CountUp start={0} end={2} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] text-black dark:text-white">
                  Lvl of English <br />
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={2} duration={6} /> : null}
                  y+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-black dark:text-white">
                  Studying <br />
                  Programming
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
