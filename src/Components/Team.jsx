import React, { useState } from 'react';
import './Team.css';  
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Cyber Analysis Executive",
      description: "Design and develop mobile and web applications, ensuring seamless and engaging user experiences and robust functionality.",
      name: "Mayank Dewali",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcfpMFo1hBt7x2oZTwjs5bFK1ysurCbhuHg&s"
    },
    {
      title: "Team Executive",
      description: "Optimize app performance, integrate advanced features, and meticulously maintain code quality for superior user satisfaction.",
      name: "Mayank Bisht",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QdednQfTJwZo3JzR5WuKuDhme0s6wM-rV6as3wt4jLawyIiRS-MEDjmeRI21L4TvStE&usqp=CAU"
    },
    {
      title: "Web Programming Head",
      description: "Lead innovative app development projects, delivering user-friendly, high-performance applications tailored to specific client needs.",
      name: "Ankit Mehta",
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
      <h1 style={{ textAlign: 'center' }}>Our Team</h1>
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

export default Team;
