import React from 'react';
import articlesArray from './mockedArticleArray';
function ArticleNavigation({articles}) {
    console.log('articles from state', articles);
    
    return (
    <div data-test="component-article-navigation">
    <ul>
        {articles.map((article) =>
        <li data-test="list-article">{article.title}</li>)}
    </ul>
    </div>
    )
}

export default ArticleNavigation;