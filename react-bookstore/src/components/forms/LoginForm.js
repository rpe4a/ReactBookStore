/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { isEmail, isEmpty } from "validator";
import InlineError from "../commons/InlineError";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      errors: {}
    };
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = ({ email, password }) => {
    const errors = {};

    if (isEmpty(password)) errors.password = "Password is required";
    if (!isEmail(email)) errors.email = "Email is not valid";

    return errors;
  };

  render() {
    const { data, loading, errors } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <Form.Input
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
            onChange={this.onChange}
            value={data.email}
            error={!!errors.email}
          />
          <InlineError text={errors.email} />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            onChange={this.onChange}
            value={data.password}
            error={!!errors.password}
          />
          <InlineError text={errors.password} />
        </Form.Field>
        <Button primary loading={loading}>
          Login
        </Button>
        <Button basic onClick={() => this.props.history.push("/")}>
          Back
        </Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired
};

export default LoginForm;
