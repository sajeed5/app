import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import "./styles/index.css";

const roomData = {
  "A302": "Information Science Department [2nd Floor]",
  "A303": "Information Science Department [2nd Floor]",
  "A304": "Information Science Department [2nd Floor]",
  "A305": "Information Science Department [2nd Floor]",
  "A306": "Electronics and Communication Department [2nd Floor]",
  "A307": "Electronics and Communication Department [2nd Floor]",
  "A308": "Electronics and Communication Department [2nd Floor]",
  "A309": "Electronics and Communication Department [2nd Floor]",
  "A206": "Electronics and Communication Department [1st Floor]",
  "A207": "Electronics and Communication Department [1st Floor]",
  "A208": "Electronics and Communication Department [1st Floor]",
  "A209": "Electronics and Communication Department [1st Floor]",
  "A215": "Computer Science Department [1st Floor]",
  "A214": "Computer Science Department [1st Floor]",
  "A213": "Computer Science Department [1st Floor]",
  "A212": "Computer Science Department [1st Floor]",
  "B218": "Mechanical Department [1st Floor]",
  "B219": "Mechanical Department [1st Floor]",
  "B220": "Mechanical Department [1st Floor]",
  "B221": "Mechanical Department [1st Floor]",
  "B222": "Mechanical Department [1st Floor]",
  "B223": "Mechanical Department [1st Floor]",
  "B224": "Mechanical Department [1st Floor]",
  "B225": "Mechanical Department [1st Floor]",
  "B226": "Mechanical Department [1st Floor]",
  "B227": "Mechanical Department [1st Floor]",
  "B205": "Civil Department [1st Floor]",
  "B206": "Civil Department [1st Floor]",
  "B207": "Civil Department [1st Floor]",
  "B208": "Civil Department [1st Floor]",
  "B209": "Civil Department [1st Floor]",
  "B210": "Civil Department [1st Floor]",
  "B211": "Civil Department [1st Floor]",
  "B212": "Civil Department [1st Floor]",
  "B213": "Civil Department [1st Floor]",
  "B214": "Civil Department [1st Floor]",
  "B215": "Civil Department [1st Floor]"
};

const App = () => {
  const [room, setRoom] = useState("");
  const [result, setResult] = useState(null); // Set initial state as null

  const handleSearch = (roomNumber) => {
    if (!roomNumber.trim()) {
      setRoom("");
      setResult(null); // Ensures box disappears when input is cleared
      return;
    }
    setRoom(roomNumber);
    setResult(roomData[roomNumber] || "Room not found. Please check again!");
  };

  return (
    <div className="app">
      <h1 className="title">Find Your Exam Block</h1>
      <SearchBar onSearch={handleSearch} />
      {result && <Result room={room} result={result} />}
      
      {/* Footer */}
      <footer className="footer">
        <p>Developed by <strong>Sajeed Malagi</strong></p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
