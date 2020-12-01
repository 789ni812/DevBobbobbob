import React from "react";
import { Link, Switch, Route, useParams } from "react-router-dom";

import Article from "./Article";

function ArticleNavigation(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/articles/1">Article 1</Link>
        </li>
        <li>
          <Link to="/articles/2">Article 2</Link>
        </li>
        <li>
          <Link to="/articles/3">Article 3</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/articles/:id" children={<ArticleHandler />} />
      </Switch>
    </div>
  );

  function ArticleHandler() {
    let { id } = useParams();
    let selectedArticle = id - 1; //Adjust id to be inline with array (starting at 0)

    return (
      <Article articles={props.articles} selectedArticle={selectedArticle} />
    );
  }
}

export default ArticleNavigation;
