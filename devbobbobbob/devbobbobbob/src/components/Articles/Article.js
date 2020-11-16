import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import { articlesArray } from './mockedArticleArray';



console.log(articlesArray)

function Article(props) {
    const [articleTitle] = useState(articlesArray[0].title);


return (
<div data-test="component-article">
    <h1 data-test="articleTitle">{articleTitle}</h1>
    <div data-test="articleDescription"></div>
    <div data-test="articleCreatedDate"></div>
    <div data-test="articleAuthor"></div>
    <div data-test="articleTags"></div>
    </div>
)    
};

// TODO Add this prop types checking.
// Article.propTypes = {
//     article: PropTypes.arrayOf(
//         PropTypes.shape({
//             title: PropTypes.string.isRequired
//         })
//     ).isRequired,
// };


export default Article;