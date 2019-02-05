import React from "react";
import { NavLink } from "react-router-dom";

const JumboSearch = () => {
  return (
    <div className="jumbo-search">
      <input
        className="search-input"
        type="text"
        placeholder="Search OER Books..."
      />
    </div>
  );
};

export default JumboSearch;
