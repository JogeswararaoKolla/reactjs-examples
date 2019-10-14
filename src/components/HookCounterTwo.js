import React from "react";
import useCounter from "../hooks/useCounter.js";
function HookCounterTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 1);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default HookCounterTwo;
