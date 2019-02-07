import React from "react";

import { LoginContainer } from "../styles/LoginStyles";
import { Button } from "../styles/reusables/Button";

const Login = props => {
  return (
    <LoginContainer>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          value={props.loginInput.username}
          name="username"
          placeholder="Enter username..."
          onChange={props.handleChange}
        />
        <input
          type="password"
          name="password"
          value={props.loginInput.password}
          placeholder="Enter password..."
          onChange={props.handleChange}
        />
        <Button onClick={props.handleLogin}>Enter</Button>
      </form>
    </LoginContainer>
  );
};

export default Login;
