import { useState } from "react";
import CourtCard from "./componet/CourtCard";
import { COURTS } from "./data/data";
import { calculateAvailability } from "./AvailabilityEngine";

function App() {
  const [bookings, setBookings] = useState([]);

  const toggleCourt = (court) => {
    setBookings((prev) =>
      prev.includes(court)
        ? prev.filter((c) => c !== court)
        : [...prev, court]
    );
  };

  const result =
    calculateAvailability(bookings);

  return (
    <div className="container">
      <h1>
        Sportomic Arena Booking Engine
      </h1>
      <h2>Select Booked Courts</h2>
      <div className="court-grid">
        {COURTS.map((court) => (
          <CourtCard
            key={court}
            court={court}
            bookings={bookings}
            blocked={result.blocked}
            selected={bookings.includes(court)}
            onToggle={toggleCourt}
          />
        ))}
      </div>
      {result.error && (
        <div className="error">
          {result.error}
        </div>
      )}
      {!result.error && (
        <>
          <div className="section">
            <h3>Booked Courts</h3>
            {result.booked.map((court) => (
              <span
                key={court}
                className="badge booked"
              >
                {court}
              </span>
            ))}
          </div>
          <div className="section">
            <h3>Blocked Courts</h3>
            {result.blocked.map((court) => (
              <span
                key={court}
                className="badge blocked"
              >
                {court}
              </span>
            ))}
          </div>
          <div className="section">
            <h3>Available Courts</h3>
            {result.available.map((court) => (
              <span
                key={court}
                className="badge available"
              >
                {court}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;