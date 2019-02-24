import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import { isEmail, isEmpty } from "validator";
import InlineError from "../commons/InlineError";

class SignupForm extends Component {
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

  onSubmit = e => {
    e.preventDefault();

    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });

      this.props.submit(this.state.data).catch(({ response }) => {
        this.setState(state => ({
          errors: {
            ...state.errors,
            ...response.data.errors
          },
          loading: false
        }));
      });
    }
  };

  validate = data => {
    const { password, email } = data;
    const errors = {};

    if (isEmpty(password)) errors.password = "Password is required";
    if (!isEmail(email)) errors.email = "Email is not valid";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field>
          <Form.Input
            name="email"
            type="email"
            label="Email"
            placeholder="email@email.com"
            onChange={this.onChange}
            value={data.email}
            error={errors.email}
            required
          />
          <InlineError error={errors.email} />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="password"
            type="password"
            label="Password"
            onChange={this.onChange}
            value={data.password}
            error={errors.password}
            required
          />
          <InlineError error={errors.password} />
        </Form.Field>
        <Button primary>Sign Up</Button>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
