import React from 'react';
import './Footer.css';
import pic from '../../assets/image/pic.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-learn-more">
          <a href="#" className="learn-more">Learn More</a>
        </div>
        <div className="footer-top">
        <div className="logo">
          <img src={pic} alt="pic" />
        </div>
          <nav className="footer-nav">
            <ul>
              <li><a href="#">For designers</a></li>
              <li><a href="#">Hire talent</a></li>
              <li><a href="#">Inspiration</a></li>
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </nav>
          <div className="footer-right">
          <nav className="footer-social">
          <img src="src/assets/image/twit.jpeg" alt="Twitter" />
          <img src="src/assets/image/fb.png" alt="Facebook" />
          <img src="src/assets/image/insta.jpeg" alt="Instagram" />
          <img src="src/assets/image/print.jpeg" alt="Pinterest" />
        </nav>
        </div>
        </div>
         
        
        <div className="footer-bottom">
          <div className="footer-left">
            <span>© 2024 Dribbble</span>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
          <div className="footer-right">
            <a href="#">Jobs</a>
            <a href="#">Designers</a>
            <a href="#">Freelancers</a>
            <a href="#">Tags</a>
            <a href="#">Places</a>
            <a href="#">Resources</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
