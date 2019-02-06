import React from "react";

const NewUserForm = props => {
  return (
    <div className="add-new-user">
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          value={props.newUserInput.username}
          name="username"
          placeholder="Enter username..."
          onChange={props.handleChange}
        />
        <input
          type="password"
          name="password"
          value={props.newUserInput.password}
          placeholder="Enter password..."
          onChange={props.handleChange}
        />
        <input
          type="password"
          name="confirm"
          value={props.newUserInput.password}
          placeholder="Confirm password..."
          onChange={props.handleChange}
        />
        <button onClick={props.handleNewUser}>Enter</button>
      </form>
    </div>
  );
};

export default NewUserForm;
