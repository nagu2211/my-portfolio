import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../Variants';
//img
import Img1 from '../assets/qwerty.webp';
import Img2 from '../assets/mywatch.webp';
import Img3 from '../assets/alwaysFresh.webp';
//icons
import htmlIcon from '../assets/htmlIcon.svg';
import cssIcon from '../assets/cssIcon.svg';
import jsIcon from '../assets/jsIcon.svg';
import bootstrapIcon from '../assets/bootstrapIcon.svg';
import chakraIcon from '../assets/chakraIcon.svg';
import reactIcon from '../assets/reactIcon.svg';
import firebaseIcon from '../assets/firebaseIcon.ico';
import handlebarsIcon from '../assets/handlebars-logo.svg';
import mongoIcon from '../assets/mongo.svg';
import expressIcon from '../assets/expressIcon.png';
import { useTranslation } from 'react-i18next';

const Work = () => {
  const [t, i18n] = useTranslation('global');
  return (
    <section className="section" id="work">
      <div className="container mx-auto z-20">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 xxl:gap-y-[7.9rem]">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">{t('work.my-latest-works')}</h2>
              <p className="max-w-sm mb-14 text-black dark:text-white">{t('work.i-show-you')}</p>
            </div>
            <a href="https://nagu2211.github.io/coderjs/" target="_blank">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-[210px] xxl:h-[282px]">
                {/* overlay */}
                <div
                  className="group-hover:bg-black/30 w-full h-full absolute
              z-40 transition-all duration-300"
                ></div>
                {/* img */}
                <img className="group-hover:scale-125 transition-all duration-500" src={Img1} alt="" />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">ECOMMERCE</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">QWERTY</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-1000 z-50 flex gap-1">
                  <img src={htmlIcon} alt="" className="w-[20px]" />
                  <img src={cssIcon} alt="" className="w-[20px]" />
                  <img src={jsIcon} alt="" className="w-[20px]" />
                  <img src={bootstrapIcon} alt="" className="w-[20px]" />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="flex-1 flex flex-col gap-y-6 ">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-[210px] xxl:h-[284px]">
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>

              <img className="group-hover:scale-125 transition-all duration-500" src={Img2} alt="" />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">ECOMMERCE</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">MY WATCH</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-1000 z-50 flex gap-1">
                <img src={htmlIcon} alt="" className="w-[20px]" />
                <img src={cssIcon} alt="" className="w-[20px]" />
                <img src={reactIcon} alt="" className="w-[20px]" />
                <img src={chakraIcon} alt="" className="w-[20px]" />
                <img src={firebaseIcon} alt="" className="w-[20px]" />
              </div>
            </div>

            <a href="https://alwaysfresh.onrender.com/" target="_blank">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-[210px] xxl:h-[284px]">
                <div
                  className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
                ></div>

                <img className="group-hover:scale-125 transition-all duration-500" src={Img3} alt="" />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">ECOMMERCE</span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">ALWAYS FRESH</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-1000 z-50 flex gap-1">
                  <img src={mongoIcon} alt="" className="w-[20px]" />
                  <img src={expressIcon} alt="" className="w-[20px]" />
                  <img src={handlebarsIcon} alt="" className="w-[20px]" />
                  <img src={jsIcon} alt="" className="w-[20px]" />
                  <img src={cssIcon} alt="" className="w-[20px]" />
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
