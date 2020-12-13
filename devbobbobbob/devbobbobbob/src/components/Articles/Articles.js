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

  /**
   * Create a Div tag and then renders the HTML included in the string
   * ref: https://reactjs.org/docs/dom-elements.html
   * //TODO Move this helper function to a utility file and include it.
   * @param {string } htmlToRender
   * @returns {string} rendered HTML wrapped in <div></div>
   */
  const dangourslySetInnerHTMLHelper = (htmlToRender) => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: htmlToRender,
        }}
      ></div>
    );
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
          <h2>{currentArticle.attributes.title}</h2>
          {currentArticle.attributes.body ? (
            dangourslySetInnerHTMLHelper(currentArticle.attributes.body.value)
          ) : (
            <div>negative</div>
          )}
          <div>
            {/* 
            //FIXME CORB issue when trying to render an image 
            See https://drupal.stackexchange.com/questions/282092/jsonapi-cross-origin-read-blocking-corb-blocked-cross-origin-response-in-vue
            and https://drupal.stackexchange.com/questions/245903/how-do-i-set-up-cors
            
            */}
            {/* <img
              src={currentArticle.relationships.field_image.links.related.href}
              alt={currentArticle.relationships.field_image.data.meta.alt}
            /> */}
          </div>
          {console.log(
            "CurrentResource: ",
            currentArticle.relationships.field_image.links
          )}
        </div>
      ) : (
        <div>Click an article resource for more info...</div>
      )}
    </div>
  );
};

export default Articles;
