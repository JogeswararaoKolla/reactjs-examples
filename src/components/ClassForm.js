import React, { Component } from "react";
import Button from "./Button.js";

class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // We need to bind the method in parent component if it was not declared as
    // arrow function like handleFormSubmit here
  }

  // If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
  // Then bind the method to the parent, and pass it to the child as a prop
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // const value = event.target.value;
    // const name = event.target.name;

    // Here we are using the Object destructuring
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit(e) {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: ""
    });
  }

  render() {
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form>
          <input
            style={{ display: "block" }}
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            style={{ display: "block" }}
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <Button onClick={this.handleFormSubmit} />
        </form>
      </div>
    );
  }
}

export default ClassForm;
