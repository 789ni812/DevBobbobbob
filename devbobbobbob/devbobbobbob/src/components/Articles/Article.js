import React from 'react';
//import PropTypes from 'prop-types';





function Article({article}) {

return (
<div data-test="component-article">
<h1 data-test="articleTitle">{article.title}</h1>
    <div data-test="articleDescription">{article.description}</div>
    <div data-test="articleCreatedDate">{article.createdDate}</div>
    <div data-test="articleAuthor">{article.author}</div>
    <div data-test="articleTags">
        <ul>
        {article.tags.map((tag) =>
        <li key={tag}>{tag}</li>
        )}
    </ul>
    </div>
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