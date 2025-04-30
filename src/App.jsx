import { useState } from "react";
import Dropdown from "./components/MoodSelector";
import TrackList from "./components/TrackList";
import "./App.css";

function App() {
  const [selectedMood, setSelectedMood] = useState("");
  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    console.log("user picked mood : ", mood);
  };

  return (
    <>
      <h2 id="Heading">Mood Music🎶</h2>
      <Dropdown handleMoodSelect={handleMoodSelect}></Dropdown>
      <TrackList selectedMood={selectedMood}></TrackList>
    </>
  );
}

export default App;
