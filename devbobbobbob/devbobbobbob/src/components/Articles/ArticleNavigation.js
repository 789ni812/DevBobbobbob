import React from 'react';
function ArticleNavigation({articles}) {
    console.log(articles);
    return (
    <div data-test="component-article-navigation">
    <ul>
        {
            articles.map((article) =>
                <li data-test="list-article">{article.title}</li>
            )
        }
    </ul>
    </div>
    )
}

export default ArticleNavigation;