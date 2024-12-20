import React, { useEffect } from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Aos  from 'aos';
import 'aos/dist/aos.css';


function HeaderSocial() {

  useEffect(() => {
    Aos.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="header__socials" data-aos="fade-down">
        <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocial