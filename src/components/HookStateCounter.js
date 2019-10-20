//snippet rfce to create functional component
import React, { useState, useEffect } from "react";
//steps needed for creating counter component
//create a function component
//state property to initialize with 0
//A method capable of updating the state property
function HookStateCounter() {
  const initialValue = 0;
  const [counter, setCounter] = useState(initialValue);

  // useState is a Hook lets you add react state to functional components
  // useState() is a function accepts an argument which is  initial value of the state property
  // and returns a pair of values as an array.(current value of state property and method to update the state property)

  //Only call Hooks at the Top level
  //Don't call hooks inside loops,conditions or nested functions
  //only call hooks from React functions
  //call them from within React functional components and not just a regular javascript functions

  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  });
  //UseEffect runs after every render of the component
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">your click count {counter} times </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4"> </div>
        <div className="col-md-1">
          <button
            className="btn btn-primary btn-block"
            onClick={() => setCounter(counter + 1)}
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
}

export default HookStateCounter;
