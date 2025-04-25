import React from "react";

function Dropdown({ onMoodSelect }) {
  const moods = ["chill", "sad", "happy", "party", "focus"];

  const handlechange = (event) => {
    const selectedMood = event.target.value;
    onMoodSelect(selectedMood);
  };
  return (
    <div>
      <label>Choose a mood</label>
      <select id="mood-select" onChange={handlechange}>
        <option value="">--select--</option>
        {moods.map((mood) => (
          <option key={mood} value={mood}>
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
