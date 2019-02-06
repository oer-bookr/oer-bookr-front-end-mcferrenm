import React, { Component } from "react";
import { connect } from "react-redux";

import ReviewList from "../components/ReviewList/ReviewList";
import { getReviews } from "../store/actions/reviewListActions";

class ReviewListView extends Component {
  componentDidMount() {
    this.props.getReviews();
  }
  render() {
    // if (window.localStorage.getItem("username") !== "the2bo5") {
    //   this.props.history.push("/login");
    // }
    return (
      <ReviewList
        {...this.props}
        reviews={this.props.reviews}
        books={this.props.books}
      />
    );
  }
}

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  reviews: state.reviewsReducer.reviews
});

export default connect(
  mapStateToProps,
  { getReviews }
)(ReviewListView);
