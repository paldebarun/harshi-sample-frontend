import React, { useState } from 'react';
import axios from 'axios';

const FacultySignup = () => {
  const [formData, setFormData] = useState({
    institute: '',
    name: '',
    department: '',
    eid: '',
    phone: '',
    emailId: '',
    experience: '',
    achievements: '',
    entityType: '',
    entityName: '',
    cluster: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/facultyAdv/create', formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Faculty Signup</h2>
      <input type="text" name="institute" value={formData.institute} onChange={handleChange} placeholder="Institute" required />
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" required />
      <input type="text" name="eid" value={formData.eid} onChange={handleChange} placeholder="EID" required />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} placeholder="Email ID" required />
      <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience" required />
      <input type="text" name="achievements" value={formData.achievements} onChange={handleChange} placeholder="Achievements" required />
      <div>
        <label>Entity Type:</label>
        <label>
          <input type="radio" name="entityType" value="Club" onChange={handleChange} required />
          Club
        </label>
        <label>
          <input type="radio" name="entityType" value="Community" onChange={handleChange} required />
          Community
        </label>
        <label>
          <input type="radio" name="entityType" value="Professional Society" onChange={handleChange} required />
          Professional Society
        </label>
        <label>
          <input type="radio" name="entityType" value="Departmental Society" onChange={handleChange} required />
          Departmental Society
        </label>
      </div>
      <input type="text" name="entityName" value={formData.entityName} onChange={handleChange} placeholder="Entity Name" required />
      <input type="text" name="cluster" value={formData.cluster} onChange={handleChange} placeholder="Cluster" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default FacultySignup;
