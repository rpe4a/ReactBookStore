import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// eslint-disable-next-line react/prop-types
const GuestRoute = ({ isAuthenticated, component: Component, ...restProps }) => (
  <Route
    {...restProps}
    render={props =>
      !isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />
    }
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapToStateProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapToStateProps)(GuestRoute);
