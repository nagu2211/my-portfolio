import React from 'react'
//images
import logo from '../assets/logo.svg'
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className='position: sticky py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <Link
          to="contact"
          smooth={true}
          spy={true}
          isDynamic={true}>
          <button className='btn btn-sm'>Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header