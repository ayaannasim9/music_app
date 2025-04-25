import { moods } from "../data/moods";
import { moodTracks } from "../data/tracks";
function TrackList({ selectedMood }) {
  if (!selectedMood) return null;
  if (!moods.includes(selectedMood)) {
    return <p>Unkown mood 😅</p>;
  }
  const tracks = moodTracks[selectedMood];
  return (
    <div>
      <h2>Tracks for the selected mood : </h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>
            <a href={track.url} target="_blank">
              {track.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TrackList;
