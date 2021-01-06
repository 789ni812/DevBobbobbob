import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import ArticlesFromDevBob from "./components/ArticlesFromDevBob/ArticlesFromDevBob";
import "./App.css";

// material-ui
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";

function App() {
  return (
    <BrowserRouter>
      <div data-test="component-app" className="App">
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="h6" component="h1" color="inherit">
              <span data-test="site-title"> DevBobBobBob</span>
            </TypoGraphy>
          </Toolbar>
        </AppBar>
        <Container>
          <MainNavigation data-test="component-mainNavigation" />
          <ArticlesFromDevBob data-test="component-ArticlesFromDevBob" />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
