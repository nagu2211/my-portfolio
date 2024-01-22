import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';
import imageSkills from "../assets/skills.jpg"

//icons
import htmlIcon from '../assets/htmlIcon.svg';
import cssIcon from '../assets/cssIcon.svg';
import jsIcon from '../assets/jsIcon.svg';
import tailwindIcon from '../assets/tailwindIcon.svg';
import bootstrapIcon from '../assets/bootstrapIcon.svg';
import sassIcon from '../assets/sassIcon.svg';
import reactIcon from '../assets/reactIcon.svg';
import nextJsIcon from '../assets/nextJsIcon.svg';
import githubIcon from '../assets/githubIcon.svg';
import gitIcon from '../assets/gitIcon.svg';
import nodeJsIcon from '../assets/nodeJsIcon.svg';
import firebaseIcon from '../assets/firebaseIcon.ico';
import mongoIcon from '../assets/mongo.svg';
import photoshopIcon from '../assets/photoshopIcon.png';
import figmaIcon from '../assets/figmaIcon.svg';
import expressIcon from '../assets/expressIcon.png';
import handlebarsIcon from '../assets/handlebars-logo.svg';
import chakraIcon from '../assets/chakraIcon.svg';
//translations
import { useTranslation } from 'react-i18next';

const Services = () => {
  const [t, i18n] = useTranslation('global');
  return (
    <section className="section" id="services">
      <div className="container mx-auto z-20">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat bg-cover
          mb-12 lg:mb-0 p-2"
          >
            <h2 className="h2 text-accent mb-6">{t('services.knowledge')}</h2>
            <h3 className="h3 max-w-[455px] mb-16 text-black dark:text-white">{t('services.i-am-a-frontend')}</h3>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="flex-1 text-black">
            <div className="cardSkills">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="card-inner">
                <div className="skills">
                  <img src={htmlIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={cssIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={jsIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={tailwindIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={bootstrapIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={sassIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={reactIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={nextJsIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={gitIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={githubIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={nodeJsIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={firebaseIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={mongoIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={photoshopIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={figmaIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={expressIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={handlebarsIcon} alt="" className="max-w-[100px] p-3" />
                  <img src={chakraIcon} alt="" className="max-w-[100px] p-3" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
