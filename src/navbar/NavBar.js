import React from 'react'
import './NavBar.css'
import companyLogo from '../assets/companyLogo-img.png'

function NavBar() {
  return (
   <>
    <div className='container'>
   <div className='navbar-container'>
    <div className='company-logo'>
        <img src={companyLogo}/>
        <p><b>C</b>oin <b>D</b>esk</p>
    </div>

    <div className='navbar-menu'>
        <ul>
            <li>Home</li>
            <li>Market</li>
            <li>Porfolio</li>
            <li>Watchlist</li>
        </ul>
    </div>

    <div className='navbar-btn'>
        <a href='#'>Login/ Register</a>
    </div>
    </div>
    </div>
   </>
  )
}

export default NavBar