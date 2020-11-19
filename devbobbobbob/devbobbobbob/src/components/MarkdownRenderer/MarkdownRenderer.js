import React, { Component } from 'react';
import testMarkdownFile from '../../assets/ProjectReferenceMarkdownFiles/test.md';
import ReactMarkdown from 'react-markdown';

class MarkdownRenderer extends Component {

  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(testMarkdownFile).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return (
    <div data-test="component-markdownRenderer">
      <ReactMarkdown source={markdown} />
      </div>
    )
  }
}

export default MarkdownRenderer;