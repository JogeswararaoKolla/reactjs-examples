import React from "react";
import useInput from "../hooks/useInput.js";
function CustomHookUserForm() {
  const [firstname, bindfFirstname, resetFirstname] = useInput("Jogi->Suma");
  const [lastname, bindLastname, resetLastname] = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Hello ${firstname} ${lastname}`);
    resetFirstname();
    resetLastname();
  };
  return (
    <div style={{ textAlign: "center", paddingTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname:</label>
          <input {...bindfFirstname} type="text" />
        </div>
        <div>
          <label>Lastname:</label>
          <input {...bindLastname} type="text" />
        </div>
        <input type="Submit" value="SubmitBtn" />
      </form>
    </div>
  );
}

export default CustomHookUserForm;
