import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Week 12 Booking</h1>
        <p>Book your appointment with the form below.</p>
      </header>
      <main>
        <BookingForm />
      </main>
    </div>
  );
}

export default App;
