import React from "react";
import {
  Jumbo,
  BigSearchInput,
  BigSearchButton
} from "../styles/JumboSearchStyles";

import bg from "../img/jumbo_bg.jpg";

const JumboSearch = props => {
  return (
    <Jumbo bg={bg}>
      <BigSearchInput
        className="search-input"
        type="text"
        value={props.searchInput}
        placeholder="Search OER Books..."
        onChange={props.handleChange}
      />
      <BigSearchButton onClick={props.searchBooks}>Search</BigSearchButton>
    </Jumbo>
  );
};

export default JumboSearch;
