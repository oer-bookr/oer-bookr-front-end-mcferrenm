import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="nav-bar" className="nav-bar">
        <div id="nav-background" className="nav-background"></div>
        <div id="nav-container" className="nav-container absolute">
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
