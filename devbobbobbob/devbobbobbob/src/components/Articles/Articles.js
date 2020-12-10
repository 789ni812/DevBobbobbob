import React, { useEffect, useState } from "react";
import ArticlesService from "../../services/ArticlesService";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);

  useEffect(() => {
    retrieveArticles();
  }, []);

  const retrieveArticles = () => {
    ArticlesService.getAll().then((response) => {
      setArticles(response.data.data);
    });
  };

  const setActiveArticle = (article) => {
    setCurrentArticle(article);
  };

  return (
    <div>
      Articles
      <ul>
        {articles &&
          articles.map((resource) => (
            <li
              className="hyperlink"
              key={resource.id}
              onClick={() => setActiveArticle(resource)}
            >
              {resource.attributes.title}
            </li>
          ))}
      </ul>
      {currentArticle ? (
        <div>
          Current resource selected
          <h2>Title: {currentArticle.attributes.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: currentArticle.attributes.body.value,
            }}
          ></div>
          {console.log("CurrentResource: ", currentArticle)}
        </div>
      ) : (
        <div>Click an article resource for more info...</div>
      )}
    </div>
  );
};

export default Articles;
