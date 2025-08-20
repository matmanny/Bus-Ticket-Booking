import React from "react";
import "./buslist";

function BusList({ buses }) {
  return (
    <div className="bus-list">
      <h2>Available Buses</h2>
      <div className="buses">
        {buses.map((bus, index) => (
          <div key={index} className="bus-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61231.png"
              alt="Bus"
            />
            <div className="bus-info">
              <h3>{bus.name}</h3>
              <p>{bus.seats} seats</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusList;
