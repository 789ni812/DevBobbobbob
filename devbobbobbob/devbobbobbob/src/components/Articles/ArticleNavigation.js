import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ArticleNavigation({ articles }) {
  function ArticleList() {
    return (
      <ul>
        {articles.map((article, key) => (
          <li data-test="list-article" key={article.id}>
            <Link to="/article/1">{article.title}</Link>
          </li>
        ))}
      </ul>
    );
  }

  function Article() {
    return <h3>Im an article</h3>;
  }

  return (
    <Router>
      <div data-test="component-article-navigation">
        <hr />
        <Link to="/articleList">Article List</Link>
        <Switch>
          <Route exact path="/">
            <ArticleList />
          </Route>
          <Route path="/articleList">
            <ArticleList />
          </Route>
          <Route path="/article/1">
            <Article />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default ArticleNavigation;
