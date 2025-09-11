import React, { useEffect } from 'react'
import './Services.css'
import { BsFillPersonCheckFill } from "react-icons/bs";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Services() {

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, [])

  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0">

        {/* Frontend Development */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Responsive, user-friendly UIs with React.js, Next.js, and modern frameworks.</p></li>
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Pixel-perfect design implementation with Material-UI, Tailwind CSS, and Styled Components.</p></li>
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>State management with Redux Toolkit, React Query, and Context API.</p></li>
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Cross-browser compatibility and performance optimization for better UX.</p></li>
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Seamless API integrations and dynamic data handling.</p></li>
          </ul>
        </article>

        {/* Backend Development */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Scalable REST APIs with Node.js, Express.js, and secure middleware.</p></li>
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Authentication & Authorization systems (JWT, Passport.js, Two-Step Verification).</p></li>
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Real-time communication with Socket.IO and WebRTC.</p></li>
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Database design and management with MongoDB, PostgreSQL, and Prisma.</p></li>
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Integration of third-party services (AWS SES, S3, Twilio, Firebase).</p></li>
          </ul>
        </article>

        {/* Deployment & DevOps */}
        <article className="service">
          <div className="service__head">
            <h3>Deployment & DevOps</h3>
          </div>
          <ul className="service__list">
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Deployment of frontend apps on Vercel and Netlify.</p></li>
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Backend hosting on Heroku, Railway, and AWS.</p></li>
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Version control and collaboration with Git & GitHub.</p></li>
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>API testing and documentation with Postman.</p></li>
            <li><BsFillPersonCheckFill className='service__list-icon'/><p>Dockerized environments for consistent deployments.</p></li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
