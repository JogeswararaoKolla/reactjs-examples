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
    this.setState({ count: this.state.count - 1 });
  }
  // Here we are using the bind on the incrementCount and decrementCount to change the context
  // from button event to these methods respectivley.
  // when you call a method with paramters we need to use to arrow funcitons like below.
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
