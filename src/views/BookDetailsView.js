import React from "react";
import { connect } from "react-redux";

import BookDetails from "../components/BookDetails/BookDetails";

const BookDetailsView = props => {
  return <BookDetails {...props} />;
};

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  reviews: state.reviewsReducer.reviews
});

export default connect(
  mapStateToProps,
  {}
)(BookDetailsView);
