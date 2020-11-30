import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Articles from "../Articles/Articles";
import MarkdownRenderer from "../MarkdownRenderer/MarkdownRenderer";
function Home() {
  return <p>Im home</p>;
}

function MainNavigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/" data-test="link-homepage">
            Home
          </Link>
        </li>
        <li>
          <Link to="/articles" data-test="link-articles">
            Articles
          </Link>
        </li>
        <li>
          <Link to="/markdown" data-test="link-markdown">
            Markdown
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/markdown">
          <MarkdownRenderer />
        </Route>
      </Switch>
    </div>
  );
}

export default MainNavigation;
