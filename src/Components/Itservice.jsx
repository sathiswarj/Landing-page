import React from 'react';
import { Outlet } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Courses.css';
const Itservice = () => {
  return (
    <div className="courses-container">
    <nav className="courses-nav">
      <div className="nav-items">
        <span className="nav-title">Courses</span>
        <ul className="nav-links">
              <li><Link to="/itservice/drone" className='nav-link'>Drone</Link></li>
              <li><Link to="/itservice/cyberanalysis" className='nav-link'>Cyber Analysis</Link></li>
              <li><Link to="/itservice/application" className='nav-link'>Application Development</Link></li>
              <li><Link to="/itservice/integration" className='nav-link'>AI Integration</Link></li>
            </ul>
      </div>
    </nav>
    <Outlet />
  </div>  )
}

export default Itservice