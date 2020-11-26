import React from 'react';

function ArticleNavigation({articles}) {
    
    return (
    <div data-test="component-article-navigation">
    <ul>
        {articles.map((article) =>
        <li data-test="list-article" key={article.id}>{article.title}</li>)}
    </ul>
    </div>
    )
}

export default ArticleNavigation;