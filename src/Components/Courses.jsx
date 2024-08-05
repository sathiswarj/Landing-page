import React from 'react';
import { Outlet } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses-container">
      <nav className="courses-nav">
        <div className="nav-items">
          <span className="nav-title">Courses</span>
          <ul className="nav-links">
            <li><Link to="/courses/web#web" className='nav-link'>Web</Link></li>
            <li><Link to="/courses/web#apps" className='nav-link'>Apps</Link></li>
            <li><Link to="/courses/web#cyber" className='nav-link'>Cyber</Link></li>
            <li><Link to="/courses/web#ai" className='nav-link'>AI</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Courses;
