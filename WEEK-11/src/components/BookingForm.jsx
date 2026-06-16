import { useState } from "react";

function BookingForm() {
  const [passengerName, setPassengerName] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setBookingDetails({
      passengerName,
      source,
      destination,
      travelDate,
    });

    setPassengerName("");
    setSource("");
    setDestination("");
    setTravelDate("");
  };

  return (
    <div className="booking-card">
      <div className="booking-header">
        <div>
          <p className="section-label">Flight booking</p>
          <h2>Reserve your seat</h2>
        </div>
      </div>

      <div className="booking-grid">
        <form className="booking-form" onSubmit={handleSubmit}>
          <label className="field-group">
            <span>Passenger name</span>
            <input
              type="text"
              placeholder="Enter passenger name"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              required
            />
          </label>

          <label className="field-group">
            <span>From</span>
            <input
              type="text"
              placeholder="Enter source city"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              required
            />
          </label>

          <label className="field-group">
            <span>To</span>
            <input
              type="text"
              placeholder="Enter destination city"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </label>

          <label className="field-group">
            <span>Travel date</span>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="primary-button">
            Book Ticket
          </button>
        </form>

        <aside className="ticket-panel">
          {bookingDetails ? (
            <div className="ticket-card">
              <p className="ticket-header">Your ticket</p>
              <div className="ticket-field">
                <span>Passenger</span>
                <strong>{bookingDetails.passengerName}</strong>
              </div>
              <div className="ticket-field">
                <span>Route</span>
                <strong>{bookingDetails.source} → {bookingDetails.destination}</strong>
              </div>
              <div className="ticket-field">
                <span>Travel date</span>
                <strong>{bookingDetails.travelDate}</strong>
              </div>
              <div className="ticket-note">
                Ticket confirmed! Check your details before departure.
              </div>
            </div>
          ) : (
            <div className="ticket-card ticket-empty">
              <p className="ticket-header">Ticket preview</p>
              <p>Fill the booking form and submit to see your ticket here.</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default BookingForm;
