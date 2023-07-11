import React, { useState, useEffect } from "react";
import "./NewsContainer.css";

const apiKey = "ef378410b31f4d0cb78b80e12b2c6883";
const resultsPerPage = 6;

const NewsContainer = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=anime&limit=10&apiKey=${apiKey}&page=${currentPage}&pageSize=${resultsPerPage}`;
        const response = await fetch(url);
        const data = await response.json();
        const newsData = data.articles;
        setNews(newsData);
        const totalResults = data.totalResults;
        setTotalPages(Math.ceil(totalResults / resultsPerPage));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="app">
      <h1 className="app__title">Anime News</h1>
      <div className="app__news">
        {news.map((article) => (
          <div className="article" key={article.publishedAt}>
            <h3 className="article__title">{article.title}</h3>
            <p className="article__description">{article.description}</p>
            <img
              className="article__image"
              src={article.urlToImage}
              alt="Article thumbnail"
            />
            <a
              className="article__link"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsContainer;
