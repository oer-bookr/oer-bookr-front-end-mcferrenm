import React from "react";
import { connect } from "react-redux";

import BookDetails from "../components/BookDetails/BookDetails";

const BookDetailsView = props => {
  console.log(props);
  return <BookDetails {...props} />;
};

const mapStateToProps = state => ({
  books: state.booksReducer.books
});

export default connect(
  mapStateToProps,
  {}
)(BookDetailsView);
