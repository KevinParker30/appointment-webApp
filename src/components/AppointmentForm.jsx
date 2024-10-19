import '../styles.css';
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { configureAmplify, signInAsGuest } from '../services/authService';

function AppointmentForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiClient, setApiClient] = useState(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        configureAmplify();
        await signInAsGuest();
        const client = generateClient();
        setApiClient(client);
      } catch (error) {
        console.error('Error initializing authentication:', error);
      }
    };

    initializeAuth();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (!apiClient) {
        throw new Error('API client not initialized');
      }

      const body = {
        name: event.target.name.value,
        age: event.target.age.value,
        phoneNumber: event.target.phoneNumber.value,
        medicalHistory: event.target.medicalHistory.value,
      };

      const response = await apiClient.post('appointmentAPI', '/', { body });
      console.log('API Response:', response);

      alert('Appointment booked successfully!');
      event.target.reset();
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="appointment-container">
      <div className="appointment-form-section">
        <form
          className="appointment-form"
          id="appointment-form"
          onSubmit={handleSubmit}
        >
          <h2>Book Your Appointment</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" required min="0" max="120" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone:</label>
            <input type="tel" id="phoneNumber" required pattern="[0-9]{10}" />
          </div>
          <div>
            <label htmlFor="medicalHistory">Medical History (optional):</label>
            <textarea id="medicalHistory"></textarea>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Booking...' : 'Book Appointment'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;