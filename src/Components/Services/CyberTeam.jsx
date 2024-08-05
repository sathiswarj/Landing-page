import React, { useState } from 'react';
import '../Team.css';  
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

const CyberTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Cyber Analysis Executive",
      description: "Implement cutting-edge security measures, protecting data integrity and preventing cyber threats effectively.",
      name: "Mayank Dewali",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcfpMFo1hBt7x2oZTwjs5bFK1ysurCbhuHg&s"
    },
    {
      title: "Cyber Analysis Executive",
      description: "Continuously monitor and assess systems, identifying vulnerabilities and enhancing overall cybersecurity strength.",
      name: "Harshwardhan Joshi",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QdednQfTJwZo3JzR5WuKuDhme0s6wM-rV6as3wt4jLawyIiRS-MEDjmeRI21L4TvStE&usqp=CAU"
    },
    {
      title: "Cyber Analysis Head",
      description: "Lead the charge in advanced cyber analysis, securing data, and ensuring robust protection against digital threats.",
      name: "Garvit Pandey",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QdednQfTJwZo3JzR5WuKuDhme0s6wM-rV6as3wt4jLawyIiRS-MEDjmeRI21L4TvStE&usqp=CAU"
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <>
    <div className='container-fluid row'>
    <div className='header'>
      <h1 style={{ textAlign: 'center' }}>Cyber Analysis Team </h1>
      <hr className='line'/>
    </div>
    <div className='team'>
 
    <div className='box-container'>
      <div className='box'>
        <h3>{items[currentIndex].title}</h3>
        <p>{items[currentIndex].description}</p>
        <p><b>{items[currentIndex].name}</b></p>
      </div>
      <div className='image-section'>
        <img src={items[currentIndex].image}  className='img-fluid' />
      </div>
    </div>
    <button className='btn-prev' onClick={handlePrev}>
    <FaAngleDoubleLeft className="icon" />
    </button>
    <button className='btn-next' onClick={handleNext}>
    <FaAngleDoubleRight className="icon"  />
    </button>
    </div>
  </div>
  </>  
  );
};

export default CyberTeam;
