import React from "react";
import { connect } from "react-redux";

import ReviewForm from "../components/ReviewForm/ReviewForm";

const ReviewFormView = props => {
  return <ReviewForm {...props} books={props.books} />;
};

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  reviews: state.reviewsReducer.reviews
});

export default connect(
  mapStateToProps,
  {}
)(ReviewFormView);
