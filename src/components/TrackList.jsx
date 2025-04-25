import { moods } from "../data/moods";
import { moodTracks } from "../data/tracks";
import { useEffect, useState } from "react";

function TrackList({ selectedMood }) {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  useEffect(() => {
    if (!selectedMood) return;

    const fetchTracks = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${selectedMood}+music&key=${API_KEY}`
        );

        const data = await response.json();

        const results = data.items.map((item) => ({
          title: item.snippet.title,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));
        setTracks(results);
      } catch (error) {
        console.log("API CALL FAILED");
        setTracks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTracks();
  }, [selectedMood, API_KEY]);

  if (!selectedMood) return null;
  if (loading) return <p>Loading tracks for "{selectedMood}"...</p>;

  return (
    <div className="track-display">
      <h2>Tracks for "{selectedMood}" 🎧</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>
            <a href={track.url} target="_blank" rel="noopener noreferrer">
              {track.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TrackList;
