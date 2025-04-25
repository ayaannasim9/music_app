import { moods } from "../data/moods";
function TrackList({ selectedMood }) {
  if (!selectedMood) return null;
  if (!moods.includes(selectedMood)) {
    return <p>Unkown mood 😅</p>;
  }
  return <p>{selectedMood} songs</p>;
}
export default TrackList;
