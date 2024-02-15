// News.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=3cc3b998ef6a41c9997a7b4976f782b1'
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();

    const interval = setInterval(fetchNews, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Content for News section */}
      <h2>News</h2>
      <ul>
        {news.map((article) => (
          <li key={article.title}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default News;
