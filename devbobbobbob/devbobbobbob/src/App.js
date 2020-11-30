import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainNavigation from "./components/MainNavigation/MainNavigation";
import Articles from "./components/Articles/Articles";
// import MarkdownRenderer from './components/MarkdownRenderer/MarkdownRenderer';

function App() {
  return (
    <BrowserRouter>
      <div data-test="component-app">
        <h1 data-test="site-title">DevBobBobBob</h1>
        <MainNavigation data-test="component-mainNavigation" />
        <Articles data-test="component-articles" />
        {/*<MarkdownRenderer data-test="component-markdownRenderer" />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
