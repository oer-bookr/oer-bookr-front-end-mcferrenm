import React from "react";

import ReviewItem from "./ReviewItem";

const ReviewList = props => {
  return (
    <div className="review-list">
      <h2>Reviews:</h2>
      {props.reviews.map(review => (
        <ReviewItem review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
