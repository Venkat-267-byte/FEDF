import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, { id: Date.now(), ...student }]);
  };

  const removeStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents(
      students.map(student => (student.id === id ? { id, ...updatedStudent } : student))
    );
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, removeStudent, updateStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
