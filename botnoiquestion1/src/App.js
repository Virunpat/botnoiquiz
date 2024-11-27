import './App.css';
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [pattern, setPattern] = useState("");

  const generatePattern = (num) => {
    let result = "";
  
    for (let row = 1; row <= num; row++) {
      result += "*".repeat(row) + "\n"; 
    }

    for (let row = num - 1; row >= 1; row--) {
      result += "*".repeat(row) + "\n"; 
    }
  
    return result;
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const num = parseInt(number); 
    if (!isNaN(num) && num > 0) {
      setPattern(generatePattern(num)); 
    } else {
      setPattern("Enter some number"); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)} 
            style={{ marginLeft: "5px", marginRight: "5px" }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        {pattern}
      </div>
    </div>
  );
}

export default App;