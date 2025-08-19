import React, { useState } from "react";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching buses from ${from} to ${to} on ${date}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚌 Bus Ticket Booking</h1>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Search Buses
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default App;
