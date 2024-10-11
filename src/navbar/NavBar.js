import React, { useState } from 'react';
import './NavBar.css';
import companyLogo from '../assets/companyLogo-img.png';
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); 
  };

  return (
    <>
      <div className='navbar-container'>
        <div className='company-logo'>
          <img src={companyLogo} alt="Company Logo" />
          <p><b>C</b>oin <b>D</b>esk</p>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#market'>Market</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#watchlist'>Watchlist</a></li>
          </ul>
        </div>

        <div className='navbar-btn'>
          <a href='#login'>Login/ Register</a>
        </div>

        <div className='hamburger' onClick={toggleMenu} aria-label="Toggle navigation">
          <GiHamburgerMenu size={20} />
        </div>
      </div>
    </>
  );
}

export default NavBar;
