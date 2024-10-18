import '../styles.css';
import AWS from 'aws-sdk';

function AppointmentForm() {
  const apiGatewayEndpoint = 'https://q8av6ipz52.execute-api.ap-south-1.amazonaws.com/formData'; 

  AWS.config.region = 'ap-south-1'; 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Initialize credentials and wait for them to load
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'ap-south-1:dfdea2b4-e6c8-46fc-a3a5-caf3acc89266', // Replace with your actual Cognito Identity Pool ID
      });
      await AWS.config.credentials.getPromise();

      // Initialize API Gateway client after credentials are loaded
      const apigClient = new AWS.APIGateway({
        apiVersion: '2015-07-09',
        endpoint: apiGatewayEndpoint,
      });

      const params = {
        // Add any path parameters or query strings if needed
      };

      const body = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        medicalHistory: document.getElementById('medicalHistory').value,
      };

      // Log the apigClient to check if it's initialized correctly
      console.log('apigClient:', apigClient);

      const response = await apigClient.post(params, body);
      const data = await response.json();

      if (response.status === 200) {
        alert(data.message);
        event.target.reset();
      } else {
        alert(
          `Error: ${data.message || 'Failed to submit appointment request'}`,
        );
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
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
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;