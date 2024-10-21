import '../styles.css';
import { useState } from 'react';

function AppointmentForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const body = {
        name: event.target.name.value,
        age: event.target.age.value,
        phoneNumber: event.target.phoneNumber.value,
        medicalHistory: event.target.medicalHistory.value,
      };

      // Replace this with your actual API call logic (e.g., using fetch)
      console.log('Form submitted with data:', body); 

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