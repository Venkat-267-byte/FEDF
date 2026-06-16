import React from 'react';
import { StudentProvider } from './StudentContext';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  return (
    <StudentProvider>
      <div className="app">
        <h1>Student Management System</h1>
        <div className="container">
          <StudentForm />
          <StudentList />
        </div>
      </div>
    </StudentProvider>
  );
}

export default App;
