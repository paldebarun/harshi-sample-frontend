// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './login';
import HomePage from './home';
import FacultySignup from './faculty-signup';
import StudentRepSignup from './student-rep-signup';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home/student-rep" element={<HomePage />} />
        <Route path="/home/faculty" element={<HomePage />} />
        <Route path="/facultysignup" element={<FacultySignup />} />
        <Route path="/studentsignup" element={<StudentRepSignup />} />
      </Routes>
    </Router>
  );
};

export default App;
