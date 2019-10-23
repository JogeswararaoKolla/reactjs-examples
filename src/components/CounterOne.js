import React, { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };
    case "decrement":
      return { count: state.count - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
// import UseReducer from react
// action is instruction to the reducer function
// reducer function accepts current state and action.returns the newstate depending on the action.
// useReducer returns pair of values current State and dispatch method capable of accepting action to execute based on the user button click
// We can have state and action as objects
function CounterOne() {
  const [currState, dispatch] = useReducer(reducer, initialState);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>Count is {currState.count} </div>
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement5
        </button>
      </div>
    </div>
  );
}

export default CounterOne;
