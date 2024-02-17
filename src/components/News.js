import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique keys

function News() {
  const [news, setNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (category, setState) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3cc3b998ef6a41c9997a7b4976f782b1`
      );

      if (response.data.status === 'ok') {
        setState(response.data.articles);
        setError(null);
      } else {
        setError(`Error fetching ${category} news: ` + response.data.message);
      }
    } catch (error) {
      console.error(`Error fetching ${category} news:`, error);
      setError(`Error fetching ${category} news. Please try again later.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      await fetchData('general', setNews); // Fetch general news when the component mounts
      await fetchData('sports', setSportsNews); // Fetch sports news when the component mounts
    };

    fetchInitialData();

    const timer = setInterval(() => {
      fetchData('general', setNews); // Set up timer to fetch general news every 2 minutes
      fetchData('sports', setSportsNews); // Set up timer to fetch sports news every 2 minutes
    }, 120000);

    return () => clearInterval(timer); // Clear timer when component unmounts
  }, []);

  const handleFetchData = async (category, setState) => {
    await fetchData(category, setState); // Call fetchData function when button is clicked
  };

  return (
    <div className="news-background">
      <div className="news-section">
        <h2>General News</h2>
        {error && <p>{error}</p>} {/* Display error message if there's an error */}
        {loading && <p>Loading...</p>} {/* Display loading message while fetching data */}
        <button onClick={() => handleFetchData('general', setNews)}>Fetch Latest General News</button> {/* Button to fetch general news */}
        <hr />
        <div className="news-container">
          {news.map((article) => (
            <div key={uuidv4()} className="news-item">
              <div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                {/* Render other details as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="news-section">
        <h2>Sports News</h2>
        {error && <p>{error}</p>} {/* Display error message if there's an error */}
        {loading && <p>Loading...</p>} {/* Display loading message while fetching data */}
        <button onClick={() => handleFetchData('sports', setSportsNews)}>Fetch Latest Sports News</button> {/* Button to fetch sports news */}
        <hr />
        <div className="news-container">
          {sportsNews.map((article) => (
            <div key={uuidv4()} className="news-item">
              <div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                {/* Render other details as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
