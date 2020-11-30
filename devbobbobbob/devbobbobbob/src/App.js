import Articles from './components/Articles/Articles';
// import MarkdownRenderer from './components/MarkdownRenderer/MarkdownRenderer';

function App() {
  return (
    <div data-test="component-app">
        <h1 data-test="site-title">DevBobBobBob</h1>
        <Articles data-test="component-articles" />
  {/*<MarkdownRenderer data-test="component-markdownRenderer" />*/ }
    </div>
  );
};

export default App;
