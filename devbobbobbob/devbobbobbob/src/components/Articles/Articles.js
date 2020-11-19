import React from 'react';
import { articlesArray } from './mockedArticleArray';
import Article from './Article';

function Articles()  {
    
return(
<div data-test="component-Articles">
<ul>
    {
    articlesArray.map((article) =>
        <li key={article.id} data-test="li-articleTitle">{article.title}</li>
        )
    }
</ul>
    <Article />
</div>
)
}

export default Articles;