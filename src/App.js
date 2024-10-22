import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Headerz';
import Footer from './components/Footer';
import DoctorProfile from './components/DoctorProfile';
import AppointmentForm from './components/AppointmentForm';
import AppointmentSuccess from './components/AppointmentSuccess'; // Import the new component

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;