// src/HomePage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const role = location.pathname.includes('student-rep') ? 'Student Rep' : 'Faculty';

  return (
    <div className="home-container">
      <h2>Welcome, {role}</h2>
      <p>You have successfully logged in as a {role}.</p>
    </div>
  );
};

export default HomePage;
