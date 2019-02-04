import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <h1>OER Bookr</h1>
      <div className="nav-links">
        <NavLink to="/books/all">Books</NavLink>
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
