import React from 'react'
import './About.css'
// import ME from '../../assets/images/Me.png'
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import ME from '../../assets/images/wahaj2-removebg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {

  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="about__me" >
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <FaUsers className='about__icon'/>
              <h5>Client</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className="about__card">
              <GrProjects className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>

          <p>I'm a Computer Science student at UBIT - KU with a passion for creating innovative and logical solutions. I believe good programming is about crafting code that's both creative and efficient. As a frontend developer, I've worked on complex websites, excelling in design and functionality. My journey started with a simple "Hello World!" and since then, I strive to push my skills beyond my comfort zone.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
