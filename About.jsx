import React from 'react'
import './about.css'
import sha from '../assets/sha.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
 const About = () => {
  return (
     <section id='about'>
   <h5>Get to Know</h5>
   <h2>About Me</h2>

   <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={sha}  alt="About Image" />
      </div>
    </div>

    <div className="about__content">
      <div className="about__cards">
        <div className="card">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>1+ Years Working</small>
        </article>
        </div>
        <div className="card">
         <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>10+ Worldwide</small>
        </article>
        </div>
        <div className="card">
         <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>3+ Completed Projects</small>
        </article>
         </div>
      </div>
      
      <div className='text'>
      <p>
      As a frontend developer with a nag for delivering engaging and user-friendly digital experiences, I am always seeking new challenges and ways to improve my skills.

My expertise in HTML, CSS, enables me to create visually appealing and responsive web applications that meet the needs of end-users. 

If you're looking for a frontend developer who is dedicated to delivering quality work, always eager to learn, and passionate about creating great user experiences, then look no further. Let's connect and see how we can work together to achieve your business goals.
      </p>
      </div>
      <a href="#contact" className='btn btn-primary'>Let's talk</a>
     </div>
   </div>
   </section>
  )
}
export default About;