import React, { Component } from "react";
import { connect } from "react-redux";

import NewUserForm from "../components/NewUserForm";
import { addNewUser } from "../store/actions/loginActions";

class NewUserFormView extends Component {
  state = {
    newUserInput: {
      username: "",
      password: "",
      confirmedPw: ""
    }
  };

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      loginInput: {
        ...prevState.newUserInput,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleNewUser = e => {
    e.preventDefault();

    // localStorage.setItem("username", this.state.loginInput.username);

    // this.props.loginUser(this.state.loginInput);

    // this.props.history.push("/books/all");
  };

  render() {
    return (
      <div>
        <NewUserForm
          newUserInput={this.state.newUserInput}
          handleChange={this.handleChange}
          // handleLogin={this.handleLogin}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addNewUser }
)(NewUserFormView);
