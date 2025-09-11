import React, { useEffect } from 'react'
import './Experience.css'
import { FaCheck } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "Java (Beginner)", "Python (Beginner)"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "Redux", "Redux Toolkit", "React Query", "Context API", "Axios", "Vite", "WebRTC"]
    },
    {
      title: "UI / UX",
      skills: ["HTML5", "CSS3", "Material-UI", "Tailwind CSS", "Bootstrap", "Shadcn", "Styled Components", "Responsive Web Design", "Cross-Browser Compatibility"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Middleware (Auth)", "REST APIs", "JWT", "Passport.js", "Backend Architecture & Design", "CORS Configuration", "Socket.IO"]
    },
    {
      title: "Databases & ORMs",
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "Firebase", "Supabase", "Prisma"]
    },
    {
      title: "Version Control & Tools",
      skills: ["Git", "GitHub", "npm", "Postman (API Testing)", "Docker"]
    },
  ];

  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container" data-aos="zoom-in">
        {skillCategories.map((category, index) => (
          <div key={index} className="experience__card">
            <h3>{category.title}</h3>
            <div className="experience__content">
              {category.skills.map((skill, i) => (
                <article key={i} className="experience__details">
                  <FaCheck className='experience__details-icon'/>
                  <h4>{skill}</h4>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
