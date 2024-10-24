// App.js
import React, { useEffect } from 'react';
import './styles.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Headerz';
import Footer from './components/Footer';
import DoctorProfile from './components/DoctorProfile';
import AppointmentForm from './components/AppointmentForm';
import AppointmentSuccess from './components/AppointmentSuccess';
import { scrollToForm } from './utils';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToForm) {
      setTimeout(() => {
        scrollToForm();
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16752451562";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-16752451562');
  }, []);

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