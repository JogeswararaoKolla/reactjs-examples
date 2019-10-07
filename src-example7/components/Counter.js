import React, { useState } from "react";
// counter example using React Hooks
function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {counter}</p>
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter + 2)}
        >
          +2
        </button>{" "}
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>{" "}
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
      </div>
    </div>
  );
}

export default Counter;
