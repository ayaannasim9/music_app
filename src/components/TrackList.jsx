import { moods } from "../data/moods";
import { moodTracks } from "../data/tracks";
function TrackList({ selectedMood }) {
  if (!selectedMood) return null;
  if (!moods.includes(selectedMood)) {
    return <p>Unkown mood 😅</p>;
  }
  const tracks = moodTracks[selectedMood];
  return (
    <div className="track-display">
      <h2>Here are some tracks for the selected mood : </h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>
            <a href={track.url} target="_blank">
              {track.title}
            </a>
          </li>
        ))}
      </ul>
      <p>Enjoy!😊</p>
    </div>
  );
}
export default TrackList;
