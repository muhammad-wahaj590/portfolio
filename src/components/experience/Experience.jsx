import React, { useEffect } from 'react'
import './Experience.css'
import { FaCheck } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  })
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container" data-aos="zoom-in">
        <div className="experience__frontend">
            <h3>FRONTEND EXPERIENCE</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>HTML5</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>CSS3</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>React JS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>Redux</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>Material UI</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
            </div>
        </div>
        <div className="experience__backend">
        <h3>OTHER EXPERIENCE</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>DSA</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>OOP</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>Version Control</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>Firebase</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className="experience__details">
                <FaCheck className='experience__details-icon'/>
                  <div>
                  <h4>APIs</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
