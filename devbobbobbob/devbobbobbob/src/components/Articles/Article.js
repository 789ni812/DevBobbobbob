function Article() {

return (
<div data-test="component-article">
    <h1 data-test="articleTitle">this is the static mock article title.</h1>
    <div className="articleDescription"><p>this is the static mock description of the article.</p></div>
    <div className="createdDate">Created: 08/11/2020</div>
    <div className="author">Author: Stuart Bradford</div>
    <div className="tags">Tags: Developer, tutorial, Article</div>
    </div>
)    
}

export default Article;