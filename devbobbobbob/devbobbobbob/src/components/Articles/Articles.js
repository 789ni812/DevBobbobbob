import React from "react";
import { articlesArray } from "./mockedArticleArray";
import ArticleNavigation from "./ArticleNavigation";
function Articles() {
  return (
    <div data-test="component-Articles">
      <h2>Articles</h2>
      <div data-test="component-ArticleNavigation">
        <ArticleNavigation articles={articlesArray} />
      </div>
    </div>
  );
}

export default Articles;
