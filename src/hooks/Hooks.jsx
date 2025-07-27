import React from "react";
import { useState } from "react";

function Hooks() {
  const [num, setNum] = useState(0);
  const [pick, setPick] = useState("Majid");

  function Inc() {
    setNum(num + 1);
  }

  function Dec() {
    setNum(num - 1);
  }

  function Reset() {
    setNum(0);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "red" }}>Your proof is {num}</h1>
      <h1>Pick</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={pick}
        onChange={(e) => setPick(e.target.value)}
      />

      <button onClick={Inc}>Increment</button>
      <button onClick={Dec}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Hooks;
