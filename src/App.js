// App.js
import React, { useEffect } from 'react';
import './styles.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Headerz';
import Footer from './components/Footer';
import DoctorProfile from './components/DoctorProfile';
import AppointmentForm from './components/AppointmentForm';
import AppointmentSuccess from './components/AppointmentSuccess'; // Import the new component
import { scrollToForm } from './utils'; // Ensure you import the scroll function

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check if we should scroll to the form
    if (location.state?.scrollToForm) {
      setTimeout(() => {
        scrollToForm();
      }, 100); // Delay scrolling by 100ms
    }
  }, [location]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <DoctorProfile />
            <AppointmentForm />
          </>
        } />
        <Route path="/appointment-success" element={<AppointmentSuccess />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
