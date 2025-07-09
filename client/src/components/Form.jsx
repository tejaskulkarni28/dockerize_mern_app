import { useState } from "react";
import user from "../services/user";
const CustomForm = () => {
  const defaultValue = 0;
  const [randomvalue, setRandomvalue] = useState(defaultValue);
  const handleInput = () => {
    const id = randomvalue;
    user.sendText({ id: id });
    console.log("HandleInput got triggered", id);
  };
  return (
    <>
      <label>Enter any random number</label>
      <br />
      <input
        type="number"
        onChange={(e) => {
          setRandomvalue(e.target.value);
        }}
        placeholder="Enter any random number"
      />
      <button onClick={handleInput}>Submit</button>
    </>
  );
};

export default CustomForm;
