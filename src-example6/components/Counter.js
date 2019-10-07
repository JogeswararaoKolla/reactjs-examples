import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cnt: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(increment) {
    this.setState({ cnt: this.state.cnt + increment });
  }
  handleDecrement(decrement) {
    this.setState({ cnt: this.state.cnt - decrement });
  }

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">Click Counter!</div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.cnt}</p>
          <button
            className="btn btn-primary"
            onClick={() => this.handleIncrement(2)}
          >
            +2
          </button>{" "}
          <button
            className="btn btn-primary"
            onClick={() => this.handleIncrement(1)}
          >
            +1
          </button>{" "}
          <button
            className="btn btn-primary"
            onClick={() => this.handleDecrement(1)}
          >
            -1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
