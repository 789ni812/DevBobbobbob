import React from 'react';
//import PropTypes from 'prop-types';





function Article(props) {


return (
<div data-test="component-article">
<h1 data-test="articleTitle">{props.article.title}</h1>
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