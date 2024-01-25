import React, { useEffect, useState } from 'react';
//images
import image from '../assets/programming.png';
//icons
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import instagram from 'react-useanimations/lib/instagram';
import linkedin from 'react-useanimations/lib/linkedin';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../Variants';
import { Link } from 'react-scroll';
//translations
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const [t, i18n] = useTranslation('global');
  const [color, setColor] = useState('white');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.querySelector('html');

    const handleClassChange = () => {
      setIsDarkMode(htmlElement.classList.contains('dark'));
    };

    htmlElement.addEventListener('click', handleClassChange);

    return () => {
      htmlElement.removeEventListener('click', handleClassChange);
    };
  }, []);

  useEffect(() => {
    setColor(isDarkMode ? 'white' : 'black');
  }, [isDarkMode]);
  const [animationKey, setAnimationKey] = useState(0);
  const fr = t('banner.front-dev');
  const bck = t('banner.back-dev');
  const crp = t('banner.creative');
  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [fr, bck, crp]);
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] xxl:min-h-[80vh] flex items-center " id="home">
      <div className="container mx-auto z-20 xxl:ml-52 xxl:mr-48">
        <div
          className="flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12"
        >
          <div className="flex-1 text-center font-secondary lg:text-left">
          <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex-1 bg-banner bg-contain bg-no-repeat h-[5.5rem] mix-blend-darken dark:mix-blend-lighten bg-top lg:bg-left pb-2"
            >
            </motion.div>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[60px] text-black dark:text-white"
            >
              SANTIAGO <span>ESPINDOLA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-1 text-[30px] lg:text-[25px] font-secondary
              font-semibold uppercase leading-[1]"
            >
              <span className="text-black dark:text-white mr-3">{t('banner.i-am-a')}</span>
              <TypeAnimation sequence={[fr, 3000, bck, 3000, crp, 3000]} key={animationKey} speed={50} className="text-accent" wrapper="span" repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="mb-3 max-w-lg mx-auto lg:mx-0 text-black dark:text-white">
              {t('banner.hi')}
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-wmax gap-x-6 items-center mb-8
              mx-auto justify-center lg:mx-0 lg:justify-start "
            >
              <Link to="contact" smooth={true} spy={true} isDynamic={true}>
                <button className="btn btn-lg ">{t('banner.contact-me')}</button>
              </Link>
              <Link to="about" smooth={true} spy={true} isDynamic={true}>
                <button className="text-gradient btn-link">{t('banner.me')}</button>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max
            mx-auto lg:mx-0"
            >
              <a href="https://www.instagram.com/santy_2211/">
                <UseAnimations animation={instagram} size={40} strokeColor={color} />
              </a>
              <a href="https://github.com/nagu2211">
                <UseAnimations animation={github} size={40} strokeColor={color} />
              </a>
              <a href="https://www.linkedin.com/in/santiago-espindola-a56ba4255/">
                <UseAnimations animation={linkedin} size={40} strokeColor={color} />
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={image} alt="" className=" rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
