//snippet rce to create class component
//snippet rconst to create constructor function
import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  // Here we are using the arrow function on the button to change the context
  // from button event to incrementCount method.
  render() {
    return (
      <div>
        <button onClick={() => this.incrementCount()}>
          count {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
