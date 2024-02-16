import React, { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=3cc3b998ef6a41c9997a7b4976f782b1'
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
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

  const handleFetchData = () => {
    fetchData(); // Call fetchData function when button is clicked
  };

  return (
    <div className="news-background">
      <h2>News</h2>
      <button onClick={handleFetchData}>Fetch Latest News</button> {/* Button to fetch data */}
      <hr />
      <div className="news-container">
        {news.map((article, index) => (
          <div key={index} className="news-item">
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
