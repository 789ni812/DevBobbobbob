import React, {useState} from 'react';
import { articlesArray } from './mockedArticleArray';
import Article from './Article';

function Articles()  {
    const [articleTitle] = useState(articlesArray[0].title);
return(
<div data-test="component-Articles">
    <Article articleTitle = {articleTitle} />
</div>
)
}

export default Articles;