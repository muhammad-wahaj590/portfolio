import React from 'react'
import './About.css'
// import ME from '../../assets/images/Me.png'
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import ME from '../../assets/images/wahaj-portfolio-pic.png'
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
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <FaUsers className='about__icon' />
              <h5>Client</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className="about__card">
              <GrProjects className='about__icon' />
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>

          <p>I am a Final-year Computer Science student and Full Stack Developer with experience in building scalable web applications. I have worked on several real-world projects, developing 100+ APIs, integrating real-time communication, and implementing cloud deployments with secure authentication.

            Passionate about creating products that combine intuitive design with robust architecture, I thrive in fast-paced environments where I can solve problems, adapt quickly, and deliver impactful solutions.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
