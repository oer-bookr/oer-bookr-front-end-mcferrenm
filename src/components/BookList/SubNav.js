import React from "react";
import { NavLink } from "react-router-dom";

const SubNav = () => {
  return (
    <nav className="sub-nav-bar">
      <h4>Subjects:</h4>
      <div className="sub-nav-links">
        <NavLink to="/books/horror">Horror</NavLink>
        <NavLink to="/books/comedy">Comedy</NavLink>
        <NavLink to="/books/drama">Drama</NavLink>
        <NavLink to="/books/romance">Romance</NavLink>
        <NavLink to="/books/action">Action</NavLink>
        <NavLink to="/books/all">All</NavLink>
      </div>
    </nav>
  );
};

export default SubNav;
