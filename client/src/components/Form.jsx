import { useState } from "react";
const CustomForm = () => {
  const defaultValue = 0;
  const [randomvalue, setRandomvalue] = useState(defaultValue);
  const handleInput = () => {
    console.log("This is value from setRandomValue: ", randomvalue);
    helper.getValue(randomvalue);
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
