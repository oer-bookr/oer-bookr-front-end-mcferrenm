import React, { Component } from "react";
import { connect } from "react-redux";

import ReviewForm from "../components/ReviewForm/ReviewForm";
import { addReview } from "../store/actions/reviewListActions";

const CLEARED_REVIEW = {
  reviewer: "",
  review: "",
  rating: ""
};

class ReviewFormView extends Component {
  state = {
    reviewInputs: {
      reviewer: "",
      review: "",
      rating: ""
    }
  };

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      reviewInputs: {
        ...prevState.reviewInputs,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleRating = e => {
    e.persist();
    this.setState(prevState => ({
      reviewInputs: {
        ...prevState.reviewInputs,
        rating: e.target.dataset.rating
      }
    }));
  };

  handleAddReview = e => {
    e.preventDefault();

    const { reviewer, review, rating } = this.state.reviewInputs;
    const id = this.props.match.params.id;

    const payload = {
      book_id: id,
      rating,
      reviewer,
      review
    };

    this.props.addReview(payload);

    this.setState({
      reviewInputs: CLEARED_REVIEW
    });

    this.props.history.push(`/book/${id}`);
  };

  render() {
    // if (!window.localStorage.getItem("jwt")) {
    //   this.props.history.push("/login");
    // }
    return (
      <ReviewForm
        {...this.props}
        books={this.props.books}
        reviewInputs={this.state.reviewInputs}
        handleChange={this.handleChange}
        handleRating={this.handleRating}
        handleAddReview={this.handleAddReview}
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
  { addReview }
)(ReviewFormView);
