import React from "react";
import useCounter from "../hooks/useCounter.js";

function HookCounterOne() {
  const [count, increment, decrement, reset] = useCounter(0, 10);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default HookCounterOne;
