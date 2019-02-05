import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";

class HomePage extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.props.isAuthenticated ? (
          <button onClick={() => this.props.logout()}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token
});

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logout, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
