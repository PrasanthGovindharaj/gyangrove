import React, { useState } from 'react';
import './Navbar.css'
import image1 from '../image/image.png'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={image1} alt="Logo" className="header-image1"></img>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <i class="bi bi-list"></i>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a className='navbar-link' href="/">Home</a>
            </li>
            <li>
              <a className='navbar-link' href="/about">About</a>
            </li>
            <li>
              <a className='navbar-link' href="/employee">Employee</a>
            </li>
            <li>
              <a className='navbar-link' href="/projects">Projects</a>
            </li>
            <li>
              <a className='navbar-link' href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar