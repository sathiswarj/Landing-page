 import React from 'react';
 import { Link } from 'react-router-dom';
 import './Footer.css'
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      < div className='container-fluid'>
        <div className="row">
          <div className ="col-md-4 text-center text-md-left" style={{color:'white'}}>
            <h5>About Us</h5>
            <p>
              We are a team of passionate developers creating awesome web applications.
            </p>
          </div>
          <div className ="col-md-4 text-center text-md-left" style={{color:'white'}}>
            <h5>Contact</h5>
            <p>
              Email: <Link to="mailto:info@example.com " style={{color:'white'}}>info@example.com</Link>
            </p>
            <p>
              Phone: +123 456 7890
            </p>
          </div>
          <div className ="col-md-4 text-center text-md-left">
            <h5 style={{color:'white'}}>Follow Us</h5>
            <Link href="https://facebook.com" className="text-white me-2" style={{color:'white'}}>
          Facebook
            </Link>
            <Link href="https://twitter.com" className="text-white me-2" style={{color:'white'}}>
           Twitter
            </Link>
            <Link href="https://instagram.com" className="text-white" style={{color:'white'}}>
             Instagram
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="text-center mt-3">
            <p className="mb-0">&copy; 2024 MyWebsite. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
