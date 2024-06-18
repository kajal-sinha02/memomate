Welcome to MemoMate frontend! MemoMate is a full-stack web application designed for efficient notes management. This repository contains the frontend code built with React.js.

Project Overview
MemoMate provides users with a seamless experience to create, read, update, and delete notes. The application ensures secure access and user authentication through the implementation of JSON Web Tokens (JWT).

Live Demo
Check out the live application: MemoMate

Table of Contents
Features
Technologies Used
Installation
Usage
Contact

Features
User Authentication: Secure user registration and login using JWT.
Notes Management: Perform real-time CRUD operations on notes.
Password Reset: Secure password reset functionality with email dispatch via Nodemailer.
Responsive Design: Accessible on both desktop and mobile devices.

Technologies Used
React.js
React Hooks
Context API

Installation
Prerequisites
Node.js (v14 or later)
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/kajal-sinha02/memomate.git
cd memomate-frontend
Install frontend dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory of the project and add the following:
env

Copy code
REACT_APP_API_URL=http://localhost:5000/api
Run the application:

bash
Copy code
npm start

Usage
Open your browser and navigate to http://localhost:3000.
Register a new account or log in with existing credentials.
Create, read, update, and delete your notes efficiently.
Use the password reset feature if needed by clicking "Forgot Password" on the login page.

Contact
For any queries or support, please contact:

Name: Kajal Sinha
Email: kajal.2022ug1049@iiitranchi.ac.in

Thank you for using MemoMate! We hope you find it helpful for all your note-taking needs.
