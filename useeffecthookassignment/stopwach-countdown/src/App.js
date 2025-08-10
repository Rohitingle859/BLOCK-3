
import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(10);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer); 
  }, [isRunning]);

  useEffect(() => {
    if (seconds === targetTime) {
      console.log("Ding! Target reached 🎯");
     
      setIsRunning(false);
    }
  }, [seconds, targetTime]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <h2>{seconds} seconds</h2>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div style={{ marginTop: "10px" ,padding:"10px"}}>
        <label>
          Set Target Time:{" "}
          <input
            type="number"
            value={targetTime}
            onChange={(e) => setTargetTime(Number(e.target.value))}
          />{" "}
          seconds
        </label>
      </div>
    </div>
  );
}

export default Stopwatch;

