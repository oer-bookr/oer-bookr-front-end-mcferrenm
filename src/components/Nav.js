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
        <Button>
          <NavLink to="/books/all">Books</NavLink>
        </Button>
        {props.isAuthenticated ? (
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        ) : (
          <Button onClick={props.handleSignout}>Logout</Button>
        )}
      </div>
    </NavBar>
  );
};

export default Nav;
