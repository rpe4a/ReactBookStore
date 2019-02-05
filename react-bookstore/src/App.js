import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </Container>
    );
  }
}


