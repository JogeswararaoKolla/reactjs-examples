import React, { useState } from "react";
// counter example using React Hooks
function HookPrevStateCounter() {
  const initialValue = 0;
  const [counter, setCounter] = useState(initialValue);

  const incrementByTwo = () => {
    for (let i = 0; i < 5; i++) {
      setCounter(prevCount => prevCount + 1);
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {counter}</p>
        <button className="btn btn-primary" onClick={incrementByTwo}>
          +5
        </button>{" "}
        <button
          className="btn btn-primary"
          onClick={() => setCounter(prevCount => prevCount + 1)}
        >
          +1
        </button>{" "}
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>{" "}
        <button
          className="btn btn-primary"
          onClick={() => setCounter(initialValue)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default HookPrevStateCounter;
