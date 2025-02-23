# Patient Appointment Scheduling System

This project is a web-based patient appointment scheduling system built using React for the front-end and a serverless architecture on AWS, including Lambda, API Gateway, SES, and Amplify.  It allows patients to easily book appointments and receive automated email confirmations.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- 
## Overview

This application simplifies the process of scheduling patient appointments.  It provides a user-friendly interface for patients to view Doctor's Profile, book appointments, and receive instant email confirmations.

## Features

- **Appointment Booking:** Patients can view Doctor's Profile and book a slot for appointment.
- **Automated Email Confirmations:**  Patients receive email confirmations upon successful booking.

## Technologies Used

- **Front-end:** React
- **Back-end:** AWS Lambda, API Gateway
- **Email Service:** Amazon SES
- **Hosting and Deployment:** AWS Amplify

## Usage

1. Access the application through the URL:https://main.durhwtsi80j9s.amplifyapp.com/
2. Patients can view Doctor's profile and upload personal details.
3. Patients details will be sent to the Doctor's Office.

## Architecture

The application follows a serverless architecture:

- **React Front-end:** Handles user interface and interactions.
- **API Gateway:** Acts as an entry point for API requests.
- **Lambda Functions:** Execute backend logic, such as appointment creation and email sending.
- **SES:** Sends email confirmations to patients.
- **Amplify:** Hosts and deploys the application.


---
