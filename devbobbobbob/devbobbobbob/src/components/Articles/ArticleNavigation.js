import React from "react";
import { Link, Switch, Route, useParams } from "react-router-dom";

import Article from "./Article";

function ArticleNavigation({ articles }) {
  const articleFolder = "/articles/";

  //TODO Fix "TypeError: Cannot read property 'map' of undefined"
  // It is possible props.articles is an object and map wants to iterate over an array.
  const articlelist = (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link to={articleFolder + article.id}>{article.title}</Link>
        </li>
      ))}
    </ul>
  );

  function ArticleHandler() {
    let { id } = useParams();
    let selectedArticle = id - 1; //Adjust id to be inline with array (starting at 0)
    return <Article articles={articles} selectedArticle={selectedArticle} />;
  }

  return (
    <div>
      {articlelist}

      <Switch>
        <Route path="/articles/:id" children={<ArticleHandler />} />
      </Switch>
    </div>
  );
}

export default ArticleNavigation;
