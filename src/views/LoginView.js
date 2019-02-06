import React, { Component } from "react";

import Login from "../components/Login";

class LoginView extends Component {
  state = {
    loginInput: {
      username: "",
      password: ""
    }
  };

  componentDidMount() {
    if (window.localStorage.token) {
      // dispatch action to set USER LOGGED IN
      // if so go to dashboard
    }
  }

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      loginInput: {
        ...prevState.loginInput,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    localStorage.setItem("username", this.state.loginInput.username);

    // const endpoint = `${process.env.REACT_APP_API_URL}/api/login`;

    // axios
    //   .post(endpoint, this.state)
    //   .then(res => {
    //     localStorage.setItem("jwt", res.data.token);
    //     window.location.reload(true);
    //   })
    //   .catch(err => console.error(err));

    this.props.history.push("/books/all");
  };

  render() {
    return (
      <div>
        <Login
          loginInput={this.state.loginInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default LoginView;
