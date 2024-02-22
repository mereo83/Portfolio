import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/movie/popular";
const API_KEY = "036ecf7ebd6674c774d6838202526478"; // Your provided API key

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        params: {
          api_key: API_KEY
        }
      });
      console.log("Response:", response);
      if (response.data.results) {
        setMovies(response.data.results);
        setError(null);
      } else {
        setError("Error fetching movies: Data not found");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Error fetching movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      <h2 className="text-white p-3">Popular Movies</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
              <p>Rating: {movie.vote_average}</p>
              <a
                href={`https://www.themoviedb.org/movie/${movie.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
