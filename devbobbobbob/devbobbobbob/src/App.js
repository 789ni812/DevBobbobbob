import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import styled from "styled-components";
import "./App.css";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <div data-test="component-app" className="App">
        <Container>
          <h1 data-test="site-title">DevBobBobBob</h1>
          <MainNavigation data-test="component-mainNavigation" />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
