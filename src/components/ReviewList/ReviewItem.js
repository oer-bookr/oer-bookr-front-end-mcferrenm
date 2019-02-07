import React from "react";

const ReviewItem = props => {
  return (
    <div className="review-item">
      <div className="review-header">
        <h4>{props.review.reviewer}</h4>
        <p>Rating: {props.review.rating}</p>
      </div>
      <p>{props.review.review}</p>
    </div>
  );
};

export default ReviewItem;
