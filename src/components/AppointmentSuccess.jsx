import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function AppointmentSuccess() {
  const phoneNumber = '+917749968411'; // Replace with the actual phone number

  return (
    <div className="appointment-success-container">
      <h2>Appointment Booked Successfully!</h2>
      <p>Thank you for booking your appointment. We look forward to seeing you soon.</p>
      <div>
        <p>You can reach us via:</p>
        <a href={`tel:${phoneNumber}`}>
          <button>
            <FontAwesomeIcon icon={faPhone} /> {/* Phone icon */}
            Call Us
          </button>
        </a>
        <a href={`https://wa.me/${phoneNumber}?text=Hello, I booked an appointment.`}>
           <button>
              <FontAwesomeIcon icon={faWhatsapp} /> {/* WhatsApp icon */}
              WhatsApp Us
           </button>
        </a>
      </div>
    </div>
  );
}

export default AppointmentSuccess;