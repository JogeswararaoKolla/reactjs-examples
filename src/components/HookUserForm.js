import React, { useState } from "react";

function HookUserForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Hello ${firstname} ${lastname}`);
    setFirstname("");
    setLastname("");
  };
  return (
    <div style={{ textAlign: "center", paddingTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname:</label>
          <input
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>Lastname:</label>
          <input
            value={lastname}
            onChange={e => setLastname(e.target.value)}
            ype="text"
          />
        </div>
        <input type="Submit" value="submitForm" />
      </form>
    </div>
  );
}

export default HookUserForm;
