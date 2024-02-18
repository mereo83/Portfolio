import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '3cc3b998ef6a41c9997a7b4976f782b1';
const COUNTRY_CODE = 'us';

function News() {
  const [news, setNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (category, setState) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}?country=${COUNTRY_CODE}&category=${category}&apiKey=${API_KEY}`);
      if (response.data.status === 'ok') {
        setState(response.data.articles);
        setError(null);
      } else {
        setError(`Error fetching ${category} news: ${response.data.message}`);
      }
    } catch (error) {
      setError(`Error fetching ${category} news. Please try again later.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      await fetchNews('general', setNews);
      await fetchNews('sports', setSportsNews);
    };

    fetchInitialData();

    const timer = setInterval(() => {
      fetchNews('general', setNews);
      fetchNews('sports', setSportsNews);
    }, 120000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="news-background">
      <div className="news-section">
        <h2>General News</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <button onClick={() => fetchNews('general', setNews)}>Fetch Latest General News</button>
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
        <button onClick={() => fetchNews('sports', setSportsNews)}>Fetch Latest Sports News</button>
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
