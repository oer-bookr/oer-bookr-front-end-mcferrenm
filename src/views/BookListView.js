import React from "react";
import { connect } from "react-redux";

import SubNav from "../components/SubNav";
import BookList from "../components/BookList/BookList";

const BookListView = props => {
  return (
    <div>
      <SubNav />
      <BookList {...props} />
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.booksReducer.books
});

export default connect(
  mapStateToProps,
  {}
)(BookListView);
