/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
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
      this.setState({ loading: true });

      this.props.submit(this.state.data).catch(({ response }) =>
        this.setState(state => ({
          errors: { ...state.errors, ...response.data.errors },
          loading: false
        }))
      );
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
      <Form error={errors.global} loading={loading} onSubmit={this.onSubmit}>
        <Form.Field>
          <Form.Input
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
            onChange={this.onChange}
            value={data.email}
            error={errors.email}
            required
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
            error={errors.password}
            required
          />
          <InlineError text={errors.password} />
        </Form.Field>
        {errors.global && (
          <Message error header="Form errors" content={errors.global} />
        )}
        <Button primary>
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
