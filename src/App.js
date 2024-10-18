import React from 'react';
import './styles.css'; // Make sure the path is correct
import Header from './components/Headerz'; 
import Footer from './components/Footer';
import DoctorProfile from './components/DoctorProfile';
import AppointmentForm from './components/AppointmentForm';

function App() {
  return (
    <div>
      <Header />
      <DoctorProfile />
      <AppointmentForm />
      <Footer />
    </div>
  );
}

export default App;