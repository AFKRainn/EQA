import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        console.log("Scrolling, current Y offset: " + window.scrollY);
        setIsScrolled(window.scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-section left">
          <a href="#about">About Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#services">Services</a>
        </div>
        <div className="nav-section logo">
          <a href="/">Logo</a>
        </div>
        <div className="nav-section right">
          <a href="#contact">Contact Us</a>
        </div>
      </nav>
    );
  }
  

export default NavBar;
