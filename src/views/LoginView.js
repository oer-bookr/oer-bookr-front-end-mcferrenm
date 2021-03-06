import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"

import Login from "../components/Login";
import { loginUser } from "../store/actions/loginActions";

class LoginView extends Component {
  state = {
    loginInput: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      loginInput: {
        ...prevState.loginInput,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.loginUser(this.state.loginInput);

    this.props.history.push("/books/all")
  };

  render() {
    return (
      <div>
        <Login
          loginInput={this.state.loginInput}
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.loginReducer.isLoggingIn,
  isLoggedIn: state.loginReducer.isLoggedIn
});

export default withRouter(connect(
  mapStateToProps,
  { loginUser }
)(LoginView));
