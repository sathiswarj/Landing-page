import { HashLink} from 'react-router-hash-link';
import './Navbar.css';
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isCoursesOpen, setCoursesOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleCoursesClick = () => {
    if (window.innerWidth <= 768) {
      setCoursesOpen(!isCoursesOpen);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setCoursesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setCoursesOpen(false);
    }
  };

  const handleServiceClick = () => {
    if (window.innerWidth <= 768) {
      setServiceOpen(!isServiceOpen);
    }
  };

  const handleMouseEnterService = () => {
    if (window.innerWidth > 768) {
      setServiceOpen(true);
    }
  };

  const handleMouseLeaveService = () => {
    if (window.innerWidth > 768) {
      setServiceOpen(false);
    }
  };

  return (
    <>
      <div className='navbar'>
        <h3 className='navbar-title'>Icon</h3>
        <div className='hamburger' onClick={toggleNav}>
          <FiAlignJustify className='icon' />
        </div>
        <ul className={`nav ${isNavOpen ? 'show' : ''}`}>
          <li>
            <Link to="/" className='nav-links'>Home</Link>
          </li>
          <li
            className={`nav-item ${isCoursesOpen ? 'active' : ''}`}
            onClick={handleCoursesClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className='nav-links'>Courses</span>
            <ul className={`courses-nav ${isCoursesOpen ? 'show' : ''}`}>
              <li><HashLink to="/courses/web#web" className='nav-link'>Web Programming</HashLink></li>
              <li><HashLink to="/courses/web#apps" className='nav-link'>App Development</HashLink></li>
              <li><HashLink to="/courses/web#cyber" className='nav-link'>Cyber Security</HashLink></li>
              <li><HashLink to="/courses/web#ai" className='nav-link'>A.I and M.L</HashLink></li>
            </ul>
          </li>
          <li><Link to="/about" className='nav-links'>About</Link></li>
          <li
            className={`nav-item ${isServiceOpen ? 'active' : ''}`}
            onClick={handleServiceClick}
            onMouseEnter={handleMouseEnterService}
            onMouseLeave={handleMouseLeaveService}
          >
            <span className='nav-links'>IT- Services</span>
            <ul className={`courses-nav ${isServiceOpen ? 'show' : ''}`}>
              <li><Link to="/itservice/drone" className='nav-link'>Drone & robotics</Link></li>
              <li><Link to="/itservice/cyberanalysis" className='nav-link'>Cyber Analysis</Link></li>
              <li><Link to="/itservice/application" className='nav-link'>Application Development</Link></li>
              <li><Link to="/itservice/integration" className='nav-link'>AI Integration</Link></li>
            </ul>
          </li>
          <li><Link to="/contact" className='nav-links'>Contact</Link></li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
