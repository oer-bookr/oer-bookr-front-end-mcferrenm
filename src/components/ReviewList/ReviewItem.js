import React from "react";

const ReviewItem = props => {
  return (
    <div className="review-item">
      <h4>{props.review.reviewer}</h4>
      <p>{props.review.rating}</p>
      <p>{props.review.review}</p>
    </div>
  );
};

export default ReviewItem;
