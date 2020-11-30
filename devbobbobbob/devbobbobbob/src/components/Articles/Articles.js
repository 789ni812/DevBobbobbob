import React from 'react';
import { articlesArray } from './mockedArticleArray';
import ArticleNavigation from './ArticleNavigation';
function Articles()  {
    
return(
<div data-test="component-Articles">
    <div data-test="component-ArticleNavigation"><ArticleNavigation articles={articlesArray} /></div>
</div>
)
}

export default Articles;