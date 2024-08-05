import React from 'react';
import about from '../assets/about-us.jpg';
import './About.css';

const About = () => {
  return (
    <div className='container my-5' style={{marginBottom:"100px"}}>
       <h2 className='text-center mb-4'>About Us</h2>
      <div className='row'>
        <div className='col-md-6 d-flex align-items-center'>
          <img src={about} alt="About us" className='img-fluid' />
        </div>
        <div className='col-md-6'>
         
          <p>
            Students gain hands-on experience in each discipline, learning to create dynamic websites, user-friendly mobile applications, advanced AI models, and robust cybersecurity measures. These essential tech skills prepare them for rewarding careers in technology, where they contribute to solving complex challenges and driving innovation in a rapidly evolving digital world. Courses encompass Web Programming, App Development, AI, Machine Learning, and Cyber Security, equipping students with critical technical skills for today's digital landscape, fostering innovation and proficiency in designing, developing, and securing advanced technological solutions across diverse industries and applications.
          </p>
          <div className='read-more'>
            <button className='read'>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
