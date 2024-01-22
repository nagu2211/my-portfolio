import React from 'react';
// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsBriefcase, BsChatSquare, BsBook } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-[60]">
      <div className="container mx-auto z-20">
        <div
          className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto
      px-5 flex justify-between items-center text-2x1 text-white/85 dark:text-white/50 glassmorphism"
        >
          <Link to="home" activeClass="active" smooth={true} spy={true} isDynamic={true} offset={-200} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link to="about" activeClass="active" smooth={true} spy={true} isDynamic={true} offset={-20} spyThrottle={1000} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiUser />
          </Link>
          <Link to="work" activeClass="active" smooth={true} spy={true} isDynamic={true} spyThrottle={1000} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsBriefcase />
          </Link>
          <Link to="services" activeClass="active" smooth={true} spy={true} isDynamic={true} spyThrottle={1000} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsBook />
          </Link>
          
          <Link to="contact" activeClass="active" smooth={true} spy={true} isDynamic={true} spyThrottle={1000} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
