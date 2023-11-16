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
            className="flex-1 bg-about bg-contain bg-no-repeat h-[600px]
          mix-blend-lighten bg-top"
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
            <h3 className="h3 mb-4">
              I'm Frontend Developer & Full Stack Student from Argentina
            </h3>
            <p className="mb-6">
              all my life I have sought my passion and found it... is to
              program, create, imagine and make it a reality! , about 2 years
              ago I come studying everything related to this world, I have
              certificates in 'web development', 'javascript', 'react',
              'algorithms and data structures' 'backend developer', With ambition and a fast
              learning pace, a proactive team player. Opting for me
              ensures no regrets,i dedicate my entire effort to every task.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  B{inView ? <CountUp start={0} end={2} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Lvl of English <br />
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={6} /> : null}
                  y+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
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
