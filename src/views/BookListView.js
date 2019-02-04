import React from "react";
import { connect } from "react-redux";

import BookList from "../components/BookList";

const BookListView = props => {
  return (
    <div>
      <BookList books={props.books} />
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
