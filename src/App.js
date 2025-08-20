import React, { useState } from "react";
import BusList from "./Pages/buslist";
import "./App.css";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [availableBuses, setAvailableBuses] = useState([]);

  const buses = [
    { name: "Express 101", seats: 32 },
    { name: "City Line 202", seats: 18 },
  ];

  const handleSearch = () => {
    // For now, just return all buses, you can filter by route/date later
    setAvailableBuses(buses);
  };

  return (
    <div className="app">
      <header>
        <h1>Bus Ticket Booking</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
        </nav>
      </header>

      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button onClick={handleSearch}>Search Buses</button>
        </div>

        {availableBuses.length > 0 && <BusList buses={availableBuses} />}
      </main>
    </div>
  );
}

export default App;
