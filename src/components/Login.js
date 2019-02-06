import React from "react";

const Login = props => {
  return (
    <div className="login">
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
        <button onClick={props.handleSubmit}>Enter</button>
      </form>
    </div>
  );
};

export default Login;
