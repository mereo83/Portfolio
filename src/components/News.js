import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique keys

function News() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=3cc3b998ef6a41c9997a7b4976f782b1'
      );

      if (response.data.status === 'ok') {
        setNews(response.data.articles);
        setError(null);
      } else {
        setError('Error fetching news: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Error fetching news. Please try again later.');
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      await fetchData(); // Fetch data when the component mounts
    };

    fetchInitialData();

    const timer = setInterval(fetchData, 120000); // Set up timer to fetch data every 2 minutes

    return () => clearInterval(timer); // Clear timer when component unmounts
  }, []);

  const handleFetchData = async () => {
    try {
      await fetchData(); // Call fetchData function when button is clicked
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Error fetching news. Please try again later.'); // Set error state if fetching fails
    }
  };

  return (
    <div className="news-background">
      <h2>News</h2>
      {error && <p>{error}</p>} {/* Display error message if there's an error */}
      <button onClick={handleFetchData}>Fetch Latest News</button> {/* Button to fetch data */}
      <hr />
      <div className="news-container">
        {news.map((article) => (
          <div key={uuidv4()} className="news-item"> {/* Use uuid to generate unique keys */}
            <div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              {/* Render other details as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
