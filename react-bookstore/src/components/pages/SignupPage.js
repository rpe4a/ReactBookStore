import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/users";
import SignupForm from "../forms/SignupForm";

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    
    return (
      <div>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(
  null,
  { signup }
)(SignupPage);
