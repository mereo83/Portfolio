import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL = "https://api.football-data.org/v2";
const API_KEY = "42f53f781b4c44a4ada03d1d30391334";

function Football() {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMatches = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/matches`, {
        headers: { "X-Auth-Token": API_KEY }
      });
      if (response.data.matches) {
        setMatches(response.data.matches);
        setError(null);
      } else {
        setError("Error fetching football matches");
      }
    } catch (error) {
      setError("Error fetching football matches. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();

    const timer = setInterval(() => {
      fetchMatches();
    }, 60000); // Fetch matches every 1 minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="football-background">
      <div className="football-section">
        <h2>Football Matches</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <button onClick={fetchMatches}>Fetch Latest Matches</button>
        <hr />
        <div className="matches-container">
          {matches.map((match) => (
            <div key={uuidv4()} className="match-item">
              <h3>{match.homeTeam.name} vs {match.awayTeam.name}</h3>
              <p>{match.competition.name}</p>
              <p>{match.utcDate}</p>
              <p>{match.status}</p>
              <p>{match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</p>
              {/* Add more match details as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Football;
