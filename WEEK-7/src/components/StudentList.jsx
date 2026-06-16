import React, { useContext } from 'react';
import { StudentContext } from '../StudentContext';

const StudentList = () => {
  const { students, removeStudent } = useContext(StudentContext);

  return (
    <div className="student-list">
      <h2>Students</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id} className="student-item">
              <div className="student-info">
                <strong>{student.name}</strong>
                <p>Roll: {student.rollNumber}</p>
                <p>Email: {student.email}</p>
              </div>
              <button onClick={() => removeStudent(student.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
