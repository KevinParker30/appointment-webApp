import '../styles.css';
import { useState, forwardRef } from 'react'; // Import forwardRef
import { useNavigate } from 'react-router-dom';

const AppointmentForm = forwardRef((props, ref) => { // Use forwardRef to pass ref
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+91 ');
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const API_URL = 'https://yny3l1ddi0.execute-api.ap-south-1.amazonaws.com/dev/send-email';
  const navigate = useNavigate();

  const cleanPhoneNumber = (value) => {
    return value.replace(/\D/g, '');
  };

  const handlePhoneNumberChange = (e) => {
    let value = e.target.value;
    if (value === '' || value === '+') {
      setPhoneNumber('+91 ');
      return;
    }

    if (!value.startsWith('+91 ')) {
      value = '+91 ' + cleanPhoneNumber(value);
    }

    const numberPart = value.slice(4);
    const cleanedNumberPart = cleanPhoneNumber(numberPart);

    if (cleanedNumberPart.length <= 10) {
      setPhoneNumber('+91 ' + cleanedNumberPart);
      setIsPhoneValid(cleanedNumberPart.length === 10);
    }
  };

  const handlePhoneNumberKeyDown = (e) => {
    if (e.key === 'Backspace') {
      const selection = e.target.selectionStart;
      if (selection <= 4) {
        e.preventDefault();
      }
    }

    if (e.key === 'Delete' && e.target.selectionStart < 4) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    const cleanedPhone = cleanPhoneNumber(phoneNumber).slice(-10);

    if (cleanedPhone.length !== 10) {
      setMessage('Error: Phone number must be exactly 10 digits.');
      setIsLoading(false);
      return;
    }

    try {
      const formData = {
        name: event.target.name.value,
        age: event.target.age.value,
        phoneNumber: `+91${cleanedPhone}`,
        medicalHistory: event.target.medicalHistory.value.trim() || 'None',
      };

      const body = JSON.stringify({
        body: JSON.stringify(formData),
      });

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Appointment booked successfully!');
        event.target.reset();
        setPhoneNumber('+91 ');
        navigate('/appointment-success');
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="appointment-container" ref={ref}>
      <div className="appointment-form-section">
        <form className="appointment-form" id="appointment-form" onSubmit={handleSubmit}>
          <h2>Book Your Appointment</h2>
          {message && (
            <div
              className={message.includes('Error') ? 'error-message' : 'success-message'}
              style={{
                padding: '10px',
                borderRadius: '5px',
                margin: '10px 0',
                color: message.includes('Error') ? '#ff4d4d' : '#4CAF50',
                backgroundColor: message.includes('Error') ? '#ffe6e6' : '#e6ffe6',
              }}
            >
              {message}
            </div>
          )}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" required min="0" max="120" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onKeyDown={handlePhoneNumberKeyDown}
              required
              placeholder="Enter 10-digit phone number"
              style={{
                borderColor: isPhoneValid ? '#ccc' : 'red',
              }}
            />
            {!isPhoneValid && (
              <p style={{ color: 'red' }}>Phone number must be exactly 10 digits.</p>
            )}
          </div>
          <div>
            <label htmlFor="medicalHistory">Medical History (optional):</label>
            <textarea id="medicalHistory" name="medicalHistory"></textarea>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Booking...' : 'Book Appointment'}
          </button>
        </form>
      </div>
    </div>
  );
});

export default AppointmentForm;
