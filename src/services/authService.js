// src/services/authService.js

import { Amplify } from 'aws-amplify';
import { signIn } from 'aws-amplify/auth';

const configureAmplify = () => {
  Amplify.configure({
    Auth: {
      identityPoolId: 'ap-south-1:0d4f5f30-80dc-405a-8a81-39b504c29e05',
      region: 'ap-south-1', 
    },
    API: {
      endpoints: [
        {
          name: "appointmentAPI",
          endpoint: 'https://q8av6ipz52.execute-api.ap-south-1.amazonaws.com/formData'
        }
      ]
    }
  });
};

const signInAsGuest = async () => {
  try {
    await signIn();
    console.log('Successfully signed in as guest');
  } catch (error) {
    console.error('Error signing in as guest:', error);
    throw error;
  }
};

export { configureAmplify, signInAsGuest };