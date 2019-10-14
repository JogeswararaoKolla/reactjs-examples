import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue(initialValue);
  };

  const inputBind = {
    value,
    onChange: handleChange
  };
  return [value, inputBind, reset];
}

export default useInput;
