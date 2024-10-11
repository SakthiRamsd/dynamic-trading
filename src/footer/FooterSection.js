import React from 'react';
import './FooterSection.css';
import companyLogo from '../assets/companyLogo-img.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWordpressSimple } from "react-icons/fa";



const FooterSection = () => {
  return (
    <>
    <footer className="footer-section">

      <div className="footer-links">

      <div className="footer-info">
        <img src={companyLogo}/>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      
        <div className='footer-icons'>
          <a><FaFacebook/></a>
          <a><FaInstagram/></a>
          <a><FaTwitter/></a>
          <a><FaYoutube/></a>
          <a><FaWordpressSimple/></a>
        </div>
      </div>


        <div className="footer-column">
          <h4>Main Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#market">Market</a></li>
            <li><a href="#porfolio">Portfolio</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#guide">Guide</a></li>
            <li><a href="#help-center">Help Center</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#video-demos">Video Demos</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
            <li><a href="#404pages">404 Pages</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#term-condition">Term & Condition</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact us</h4>
          <ul>
            <li><a href="#phone">Phone: +91 123456789</a></li>
            <li><a href="#email">Email - dummyemail@gmail.com</a></li>
            <li><a href="#address">Address - 467 Cottage St. Alex, VA 22304</a></li>
          </ul>
        </div>
      </div>
      <p className='footer-copy'>@ All Rights Reserved by dynamic</p>
    </footer>
    </>
  );
};

export default FooterSection;
