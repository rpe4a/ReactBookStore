/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";

class LoginPage extends Component {
  submit = data => {
    this.props.login(data).then(() => this.props.history.push("/"));
  };

  render() {
    return (
      <div>
        <Grid centered columns={2}>
          <Grid.Column>
            <h1>Login Page</h1>
            <LoginForm history={this.props.history} submit={this.submit} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(LoginPage);
