import React from 'react';
import '../styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Dr. Pallavi Purohit</h3>
          <p>Providing quality healthcare since 2020</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          
          <p>Phone: 7749968411</p>
          <p>Email: psychnerve@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Dr. Pallavi Purohit. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;