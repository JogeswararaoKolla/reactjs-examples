//snippet rce to create class component
//snippet rconst to create constructor function
import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount(value = 1) {
    this.setState({ count: this.state.count + value });
  }
  decrementCount() {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  }
  // If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
  // Then bind the method to the parent, and pass it to the child as a prop
  // Here we are using the bind on the incrementCount and decrementCount to change the context
  // from button event to these methods respectivley.
  // when you call a method with paramters we need to use to arrow funcitons like below.
  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <h2> Here is your count {this.state.count} </h2>
        <button onClick={() => this.incrementCount(5)}>+5</button>
        <button onClick={() => this.incrementCount()}>+1</button>
        <button onClick={this.decrementCount}>-1</button>
      </div>
    );
  }
}

export default ClassCounter;
