import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <NavLink exact to="/">
        <h1>OER Bookr</h1>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/books/all">Books</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
