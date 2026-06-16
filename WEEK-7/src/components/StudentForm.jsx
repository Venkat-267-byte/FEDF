import React, { useState, useContext } from 'react';
import { StudentContext } from '../StudentContext';

const StudentForm = () => {
  const { addStudent } = useContext(StudentContext);
  const [formData, setFormData] = useState({ name: '', rollNumber: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.rollNumber.trim() && formData.email.trim()) {
      addStudent(formData);
      setFormData({ name: '', rollNumber: '', email: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Add Student</h2>
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="rollNumber"
        placeholder="Roll Number"
        value={formData.rollNumber}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
