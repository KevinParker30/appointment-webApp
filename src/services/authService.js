// src/services/authService.js

import { Amplify } from 'aws-amplify';
import { fetchAuthSession } from 'aws-amplify/auth';

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

const getCredentials = async () => {
  try {
    const { credentials } = await fetchAuthSession();
    return credentials;
  } catch (error) {
    console.error('Error getting credentials:', error);
    throw error;
  }
};

export { configureAmplify, getCredentials };