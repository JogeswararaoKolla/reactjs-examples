import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, { type, value }) => {
  switch (type) {
    case "increment":
      return state + value;
    case "decrement":
      return state - value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [counter1, dispatch1] = useReducer(reducer, 1);
  const [counter2, dispatch2] = useReducer(reducer, 10);
  return (
    <div>
      <div> Counter One : {counter1}</div>
      <div>
        <button onClick={() => dispatch1({ type: "increment", value: 1 })}>
          +1
        </button>
        <button onClick={() => dispatch1({ type: "decrement", value: 1 })}>
          -1
        </button>
        <button onClick={() => dispatch1({ type: "reset", value: 0 })}>
          0
        </button>
      </div>
      <div> Counter Two : {counter2}</div>
      <div>
        <button onClick={() => dispatch2({ type: "increment", value: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch2({ type: "decrement", value: 5 })}>
          -5
        </button>
        <button onClick={() => dispatch2({ type: "reset", value: 0 })}>
          0
        </button>
      </div>
    </div>
  );
}

export default CounterTwo;
