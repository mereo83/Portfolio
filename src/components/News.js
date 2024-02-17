import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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
      await fetchData('general', setNews);
      await fetchData('sports', setSportsNews);
    };

    fetchInitialData();

    const timer = setInterval(() => {
      fetchData('general', setNews);
      fetchData('sports', setSportsNews);
    }, 120000);

    return () => clearInterval(timer);
  }, []);

  const handleFetchData = async (category, setState) => {
    await fetchData(category, setState);
  };

  return (
    <div className="news-background">
      <div className="news-section">
        <h2>General News</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <button onClick={() => handleFetchData('general', setNews)}>Fetch Latest General News</button>
        <hr />
        <div className="news-container">
          {news.map((article) => (
            <div key={uuidv4()} className="news-item">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))}
        </div>
      </div>
      <div className="news-section">
        <h2>Sports News</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <button onClick={() => handleFetchData('sports', setSportsNews)}>Fetch Latest Sports News</button>
        <hr />
        <div className="news-container">
          {sportsNews.map((article) => (
            <div key={uuidv4()} className="news-item">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
