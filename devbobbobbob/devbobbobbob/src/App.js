import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainNavigation from "./components/MainNavigation/MainNavigation";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div data-test="component-app" className="App">
        <h1 data-test="site-title">DevBobBobBob</h1>
        <MainNavigation data-test="component-mainNavigation" />
      </div>
    </BrowserRouter>
  );
}

export default App;
