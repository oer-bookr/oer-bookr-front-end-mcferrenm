import React from "react";

import ReviewItem from "./ReviewItem";

const ReviewList = props => {
  const id = props.match.params.id;
  const filteredReviews = props.reviews.filter(
    review => `${review.book_id}` === id
  );

  return (
    <div className="review-list">
      <h2>Reviews:</h2>
      {filteredReviews.map(review => (
        <ReviewItem review={review} key={review.reviewer} />
      ))}
    </div>
  );
};

export default ReviewList;
