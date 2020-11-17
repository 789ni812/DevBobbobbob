import Articles from './components/Articles/Articles';

function App() {
  return (
    <div data-test="component-app">
        <h1 data-test="site-title">DevBobBobBob</h1>
        <Articles data-test="component-articles" />
    </div>
  );
};

export default App;
