import React from "react";
import { NavLink, Link } from "react-router-dom";

import { SubNavContainer } from "../../styles/BookListStyles";
import { Button } from "../../styles/reusables/Button";

const SubNav = () => {
  return (
    <SubNavContainer>
      <div className="left-nav" />
      <div className="sub-nav-links">
        <NavLink to="/books/math">Math</NavLink>
        <NavLink to="/books/history">History</NavLink>
        <NavLink to="/books/english">English</NavLink>
        <NavLink to="/books/science">Science</NavLink>
        <NavLink to="/books/all">All</NavLink>
      </div>
      <div className="right-nav">
        <Link to="/book-form">
          <Button>Add a Book</Button>
        </Link>
      </div>
    </SubNavContainer>
  );
};

export default SubNav;
