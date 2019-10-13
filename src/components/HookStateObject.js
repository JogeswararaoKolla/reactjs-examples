import React, { useState } from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input className="form-control" {...props} />
    </div>
  );
}

export function HookStateObject() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  //useState does not auotmatically merge and update the state of an object.
  //We need to do manually merge the object with spread operator and pass the value to setter function
  return (
    <div>
      <Input
        type="text"
        value={name.firstname}
        onChange={e => setName({ ...name, firstname: e.target.value })}
      ></Input>
      <Input
        type="text"
        value={name.lastname}
        onChange={e => setName({ ...name, lastname: e.target.value })}
      ></Input>
      <h2>your Firstname is {name.firstname}</h2>
      <h2>your Lastname is {name.lastname}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}
