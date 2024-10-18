import React from 'react';
import '../styles.css';
import profileImg from '../assets/flipped.png';
import { scrollToForm } from '../utils';

function DoctorProfile() {
  return (
    <div className="doctor-profile">
      <div className="doctor-info-left">
        <h2>Dr. Pallavi Purohit</h2>
        <h3>Physician </h3>
        <p>
        Dr. Pallavi Purohit is a qualified Ayurvedic doctor with a BAMS degree (registration number UK4824.)
        She is certified by the Central Council of Indian Medicine (CCIM) 
        and offers expert consultations and treatments for a wide range of diseases and chronic conditions based on 
        Ayurvedic principles.
        Dr. Purohit is dedicated to providing effective Ayurvedic care to her patients.
        </p>
        <button className="appointment-btn" onClick={scrollToForm}>
         Book Phone consultation @ ₹100 only
        </button>
      </div>
      <div className="doctor-image-container">
        <img src={profileImg} alt="Dr. Pallavi Purohit" className="doctor-profile-img" />
      </div>
    </div>
  );
}

export default DoctorProfile;
