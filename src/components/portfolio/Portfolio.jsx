import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/images/IMG1.PNG'
import IMG2 from '../../assets/images/IMG2.PNG'
import IMG3 from '../../assets/images/IMG3.PNG'
import IMG4 from '../../assets/images/IMG4.PNG'
import IMG5 from '../../assets/images/IMG5.PNG'
import IMG6 from '../../assets/images/vs50.PNG'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Quiz App',
    github: 'https://github.com',
    demo: 'https://quizzopedia.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Netflix Clone',
    github: 'https://github.com',
    demo: 'https://sparkly-narwhal-df54ac.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Food Website',
    github: 'https://github.com',
    demo: 'https://onmifoodcom.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio Website',
    github: 'https://github.com',
    demo: 'https://ourportfoliocom.netlify.app'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Sign Up Page',
    github: 'https://github.com',
    demo: 'https://blog-form.netlify.app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Spotify Clone',
    github: 'https://github.com',
    demo: 'http://spotifayyclone.netlify.app'
  }
]  

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  })
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
