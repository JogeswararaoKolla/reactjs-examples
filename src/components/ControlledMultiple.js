import React from "react";

import "../components/Form/style.css";

class ControlledMultiple extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputName: "", textAreaName: "", selectName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Handle Submit function..");
    console.log(this.state);
    this.setState({
      inputName: "",
      textAreaName: "",
      selectName: ""
    });
  }

  render() {
    var array = ["apple", "banana", "carrot", "donuts"];
    var options = array.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
    return (
      <div>
        <form className="form">
          <input
            name="inputName"
            type="input"
            value={this.state.inputName}
            onChange={this.handleChange}
          />
          <textarea
            name="textAreaName"
            type="text"
            value={this.state.textAreaName}
            onChange={this.handleChange}
          />
          <select
            name="selectName"
            value={this.state.selectName}
            onChange={this.handleChange}
          >
            {options}
          </select>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ControlledMultiple;
