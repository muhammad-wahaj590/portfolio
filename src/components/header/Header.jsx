import React, { useEffect } from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/images/wahaj2-removebg.png'
import HeaderSocial from './HeaderSocial'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {

  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1 data-aos="zoom-in">Muhammad Wahaj</h1>
      <h5 className='text-light'>Full Stack Developer</h5>
      <CTA />
      <HeaderSocial />

      
      <div className="me" 
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
        <img src={Me} alt="me" />
      </div>

      <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
