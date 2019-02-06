import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar">
        <div className="nav-background"></div>
        <div className="nav-container absolute">
            <NavLink exact to="/">
                <div className="logo"></div>
            </NavLink>
            <div className="nav-links">
                <NavLink to="/books/all">Books</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </div>
    </nav>
  );
};

export default Nav;
