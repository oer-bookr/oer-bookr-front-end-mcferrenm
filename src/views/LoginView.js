import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../components/Login";
import { loginUser } from "../store/actions/loginActions";

class LoginView extends Component {
  state = {
    loginInput: {
      username: "",
      password: ""
    }
  };

  // componentDidMount() {
  //   if (window.localStorage.token) {
  //     // dispatch action to set USER LOGGED IN
  //     this.props.loginUser();
  //     // if so go to dashboard
  //   }
  // }

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

    localStorage.setItem("username", this.state.loginInput.username);

    this.props.loginUser(this.state.loginInput);

    this.props.history.push("/books/all");
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
  isLoggingIn: state.loginReducer.isLoggingIn
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginView);
