import React from 'react'
import './Nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiBookMarkedLine } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
// import { GiProgression } from "react-icons/gi";
import { useState } from 'react';

function Nav() {
  const [isActive, setIsActive] = useState('')
  return (
    <nav>
      <a href="#" onClick={() => setIsActive('#')} className={isActive === '#' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setIsActive('#about')} className={isActive === '#about' ? 'active' : ''}><FaUser /></a>
      <a href="#experience" onClick={() => setIsActive('#experience')} className={isActive === '#experience' ? 'active' : ''}><RiBookMarkedLine /></a>
      <a href="#services" onClick={() => setIsActive('#services')} className={isActive === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setIsActive('#contact')} className={isActive === '#contact' ? 'active' : ''}><MdOutlineMessage /></a>
      {/* <a href="#skills"  onClick={() => setIsActive('#skills')} className={isActive === '#skills' ? 'active' : ''}><GiProgression /></a> */}
    </nav>
  )
}

export default Nav
