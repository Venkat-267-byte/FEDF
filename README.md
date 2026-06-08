# Student Management React App

A simple React application for managing student information using Context API.

## Project Structure

```
src/
├── components/
│   ├── StudentForm.jsx      # Form to add new students
│   └── StudentList.jsx      # Display list of students
├── App.jsx                  # Main app component
├── StudentContext.jsx       # Context for state management
├── main.jsx                 # Entry point
├── App.css                  # App styles
└── index.css                # Global styles
```

## Features

- Add new students with name, email, and grade
- View list of all students
- Remove students from the list
- Responsive design for mobile and desktop
- State management using React Context API

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Context API** - State management

## Getting Started

The application provides a student management system with:
- A form to add students (StudentForm component)
- A list to view and remove students (StudentList component)
- Centralized state management via StudentContext

Edit the files in the `src/` folder to customize your application.
