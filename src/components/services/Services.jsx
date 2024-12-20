import React from 'react'
import './Services.css'
import { BsFillPersonCheckFill } from "react-icons/bs";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function Services() {

  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS with animation duration
  })

  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0">
        <article className="service">
          <div className="service__head">
            <h3>FIGMA TO CODE CONVERSION</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Expert in converting Figma designs into clean, responsive code.</p>
            </li>
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Skilled in translating complex UI designs into functional web components.</p>
            </li>
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Ensures pixel-perfect implementation of design specifications.</p>
            </li>
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Incorporates best practices for HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Implements efficient animations and interactions to enhance user engagement.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>WEBSITE DEVELOPMENT</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Builds websites from scratch with optimized, clean code.</p>
            </li>
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Enhances and refines existing websites for better performance.</p>
            </li>
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Improves code quality for scalability and maintainability.</p>
            </li>
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Integrates new features without disrupting the current structure.</p>
            </li>
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Ensures SEO-friendly structure to improve website visibility.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>PRODUCT AND SERVICE-BASED</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Versatile in handling both product-focused and service-oriented projects.</p>
            </li>
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Adapts to diverse project requirements with a focus on usability.</p>
            </li>
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Implements effective front-end solutions for various industries.</p>
            </li>
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Prioritizes user experience and seamless functionality in every project.</p>
            </li>
            <li>
              <BsFillPersonCheckFill className='service__list-icon'/>
              <p>Maintains clear communication for smooth project execution and collaboration.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
