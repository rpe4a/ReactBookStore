/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import LoginForm from "../forms/LoginForm";

class LoginPage extends Component {
  submit = data => {
    console.log(data);
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
  history: PropTypes.object.isRequired
};

export default LoginPage;
