import React from "react";
function CourtCard({ court, selected, onToggle, bookings, blocked }) {
  return (
    <label className="court-card">
      <input
        type="checkbox"
        checked={bookings.includes(court)}
        disabled={blocked.includes(court) && !bookings.includes(court)}
        onChange={() => onToggle(court)}
      />
      <span>{court}</span>
    </label>
  );
}

export default CourtCard;
