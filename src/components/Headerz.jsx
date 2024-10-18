import React, { useState } from 'react';
import '../styles.css';
import { scrollToForm } from '../utils';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Ayurway</h1>
        </div>
        <button className="nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
          <div className={isNavOpen ? 'hamburger open' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <nav className={isNavOpen ? 'nav nav-open' : 'nav'}>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li className="nav-appointment-btn">
            <a href="#appointment-form" onClick={(e) => {
            e.preventDefault(); // Prevent the default jump
           scrollToForm();    // Call your scroll function
          }
    } 
    className="appointment-btn">
    Book Appointment
  </a>
</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
