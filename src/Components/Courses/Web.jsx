import React from 'react';
import './Web.css'
import web from '../../assets/web.jpg'
import app from '../../assets/app.jpg'
import cyber from '../../assets/cyber.jpg'
import ai from '../../assets/ai.jpg'
const Web = () => {
  return (
    <div className='container-fluid'>
      <div className="header">
        <h1 style={{ textAlign: 'center', marginBottom:"100px" }}>WHAT DO WE DO?</h1>
      </div>
      <div className='web-development col-lg-12' id='web' style={{marginBottom:"83px"}}>
        <div className='col-sm-6'>
          <img src={web} alt="Web Development" className="standard-img" />
        </div>
        <div className='col-sm-6'>
          <h2 className="section-title">Web Programming</h2>
          <p className='section-text'>
            Covering fundamental and advanced skills, our comprehensive curriculum equips learners with the latest tools and technologies essential for designing and developing dynamic websites and web applications. From front-end frameworks to backend databases, students gain hands-on experience to excel in the rapidly evolving field of web development.
          </p>
        </div>
      </div>
      <div className='section'>
        <div className='app-development col-lg-12' id='apps'  style={{marginBottom:"83px"}}>
          <div className='col-sm-6'>
            <img src={app} alt="App Development" className="standard-img" />
          </div>
          <div className='col-sm-6'>
            <h2 className="section-title">App Development</h2>
            <p className='section-text'>
            App Development: Explore the intricacies of creating mobile applications for Android and iOS platforms. From conceptual design to coding and deployment, gain hands-on experience in developing user-friendly interfaces and integrating essential features, ensuring your apps meet industry standards and user expectations.
            </p>
          </div>
        </div>
        <div className='web-development col-lg-12' id='cyber'  style={{marginBottom:"83px"}}>
          <div className='col-sm-6'>
            <img src={cyber} alt="Cyber Security" className="standard-img" />
          </div>
          <div className='col-sm-6'>
            <h2 className="section-title">AI & ML</h2>
            <p className='section-text'>
            AI and Machine Learning: Dive into algorithms and techniques such as supervised learning, neural networks, and deep learning, gaining expertise in advanced data analysis and pattern recognition essential for developing intelligent systems and applications that drive innovation across industries.
            </p>
          </div>
        </div>
      </div>
      <div className='web-development col-lg-12' id='ai' style={{marginBottom:"83px"}}>
        <div className='col-sm-6'>
          <img src={ai} alt="AI Development" className="standard-img" />
        </div>
        <div className='col-sm-6'>
          <h2 className="section-title">Cyber Security</h2>
          <p className='section-text'>
          Cyber Security: Gain comprehensive knowledge in safeguarding systems and data against cyber threats. Explore cryptography, network security, and ethical hacking techniques to develop robust defense strategies crucial for protecting digital assets and ensuring the integrity and confidentiality of sensitive information across diverse organizational environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Web;
