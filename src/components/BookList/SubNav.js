import React from "react";
import { NavLink, Link } from "react-router-dom";

const SubNav = () => {
  return (
    <nav className="sub-nav-bar">
      <div className="left-nav" />
      <div className="sub-nav-links">
        <h4>Subjects:</h4>
        <NavLink to="/books/math">Math</NavLink>
        <NavLink to="/books/history">History</NavLink>
        <NavLink to="/books/english">English</NavLink>
        <NavLink to="/books/science">Science</NavLink>
        <NavLink to="/books/all">All</NavLink>
      </div>
      <div className="right-nav">
        <Link to="/addbook">
          <button>Add a Book</button>
        </Link>
      </div>
    </nav>
  );
};

export default SubNav;
