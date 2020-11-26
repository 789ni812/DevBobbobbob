import React from 'react';
import { articlesArray } from './mockedArticleArray';
import Article from './Article';
import ArticleNavigation from './ArticleNavigation';
function Articles()  {
    
return(
<div data-test="component-Articles">
<div data-test="component-ArticleNavigation">
    <ArticleNavigation articles={articlesArray} />
    </div>

    <Article article = {articlesArray[0]}/>
</div>
)
}

export default Articles;