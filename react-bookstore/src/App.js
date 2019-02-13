import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import GuestRoute from "./components/routes/GuestRoute";
import UserRoute from "./components/routes/UserRoute";

export default class App extends Component {
  render() {
    //! Pass location to routes fix react-route and redux
    const { location } = this.props;

    return (
      <Container>
        <Route location={location} path="/" exact component={HomePage} />
        <GuestRoute
          location={location}
          path="/login"
          exact
          component={LoginPage}
        />
        <UserRoute
          location={location}
          path="/dashboard"
          exact
          component={DashboardPage}
        />
      </Container>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape.isRequired
};
