import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className="app-container">
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/add-book">Add Book</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
