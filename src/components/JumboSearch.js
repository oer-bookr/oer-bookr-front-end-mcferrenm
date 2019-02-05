import React from "react";

const JumboSearch = props => {
  return (
    <div className="jumbo-search">
      <input
        className="search-input"
        type="text"
        value={props.searchInput}
        placeholder="Search OER Books..."
        onChange={props.handleChange}
      />
      <button onClick={props.searchBooks}>Search</button>
    </div>
  );
};

export default JumboSearch;
