import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

function Skills() {
  const skillsRef = useRef(null); // Create a ref for the skills section

  useEffect(() => {
    // Function to animate skill bars
    const animateSkills = () => {
      const skillBars = document.querySelectorAll('.skill-bar');
      skillBars.forEach(skill => {
        const barFill = skill.querySelector('.skill-bar-fill');
        const percentText = skill.querySelector('.skill-percent');
        const percentage = parseInt(barFill.getAttribute('data-percentage'));

        let progress = 0;
        const animateBar = setInterval(() => {
          if (progress <= percentage) {
            barFill.style.width = `${progress}%`;
            percentText.textContent = `${progress}%`;
            percentText.style.left = `${progress}%`; // Move the percentage text with the progress bar
            progress++;
          } else {
            clearInterval(animateBar);
          }
        }, 15); // Adjust the speed as needed
      });

      // Animate professional skills (circular)
      const skillCircles = document.querySelectorAll('.path');
      skillCircles.forEach((circle) => {
        const percentage = circle.parentElement.parentElement.querySelector('.percentage').textContent;
        const offset = 502 - (502 * parseInt(percentage)) / 100;
        circle.style.strokeDashoffset = offset;
      });
    };

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills(); // Animate skills when the section comes into view
          observer.unobserve(entry.target); // Stop observing after animation starts
        }
      });
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className="skills-container" id="skills" ref={skillsRef}>
      <h5>How I Rate My Skills</h5>
      <h2>My Skills</h2>

      <div className="skills-content">
        {/* Technical Skills */}
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <div className="skill">
            <span>Frontend</span>
            <div className="skill-bar">
              <div className="skill-bar-fill" data-percentage="90"></div>
              <span className="skill-percent">90%</span>
            </div>
          </div>
          <div className="skill">
            <span>Backend</span>
            <div className="skill-bar">
              <div className="skill-bar-fill" data-percentage="85"></div>
              <span className="skill-percent">85%</span>
            </div>
          </div>
          <div className="skill">
            <span>Databases</span>
            <div className="skill-bar">
              <div className="skill-bar-fill" data-percentage="85"></div>
              <span className="skill-percent">85%</span>
            </div>
          </div>
          <div className="skill">
            <span>JavaScript / TypeScript </span>
            <div className="skill-bar">
              <div className="skill-bar-fill" data-percentage="85"></div>
              <span className="skill-percent">85%</span>
            </div>
          </div>
          <div className="skill">
            <span>DevOps & Deployment</span>
            <div className="skill-bar">
              <div className="skill-bar-fill" data-percentage="75"></div>
              <span className="skill-percent">75%</span>
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="professional-skills">
          <h3>Professional Skills</h3>
          <div className="radial-bars">
            <div className="radial-bar">
                <svg x='0px' y='0px' viewBox="0 0 200 200">
                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                </svg>
                <div className="percentage">85%</div>                
                <div className="text">Problem Solving</div>
            </div>
            <div className="radial-bar">
                <svg x='0px' y='0px' viewBox="0 0 200 200">
                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                </svg>
                <div className="percentage">85%</div>                
                <div className="text">Communication</div>
            </div>
            <div className="radial-bar">
                <svg x='0px' y='0px' viewBox="0 0 200 200">
                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                </svg>
                <div className="percentage">85%</div>                
                <div className="text">Adaptability </div>
            </div>
            <div className="radial-bar">
                <svg x='0px' y='0px' viewBox="0 0 200 200">
                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                </svg>
                <div className="percentage">90%</div>                
                <div className="text">Teamwork</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
