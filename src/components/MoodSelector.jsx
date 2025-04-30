import React, { useState } from "react";

function Dropdown({ handleMoodSelect }) {
  const [inputValue, setInputValue] = useState("");

  const handlechange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    const mood = inputValue.trim().toLowerCase();
    setInputValue("");
    if (mood) {
      handleMoodSelect(mood);
    }
  };
  return (
    <div className="dropdown">
      <label htmlFor="mood-input">What music do you wanna listen to?</label>
      <input
        id="mood-input"
        type="text"
        placeholder="Enter song:"
        onChange={handlechange}
        value={inputValue}
      ></input>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default Dropdown;
