import React from "react";
import { NavLink } from "react-router-dom";
import { NavBar } from "../styles/NavStyles";
import { Button } from "../styles/reusables/Button";

const Nav = props => {
  return (
    <NavBar>
      <NavLink exact to="/">
        <h1>OER Bookr</h1>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/books/all">
          <Button>Books</Button>
        </NavLink>
        {props.isAuthenticated ? (
          <Button onClick={props.handleSignout}>Logout</Button>
        ) : (
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        )}
      </div>
    </NavBar>
  );
};

export default Nav;
