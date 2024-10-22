import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // This function will scroll to the form based on its id
  const scrollToForm = () => {
    const formElement = document.getElementById('appointment-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookAppointmentClick = (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // If already on the homepage, just scroll to the form
      scrollToForm();
    } else {
      // If on a different page, navigate to the homepage and pass the state
      navigate('/', { state: { scrollToForm: true } });
    }

    // Close the navigation menu if open
    setIsNavOpen(false);
  };

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
              <a
                href="#appointment-form"
                onClick={handleBookAppointmentClick}
                className="appointment-btn"
              >
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
