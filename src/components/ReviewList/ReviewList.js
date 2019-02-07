import React from "react";

import ReviewItem from "./ReviewItem";
import { ReviewListContainer } from "../../styles/ReviewListStyles";

const ReviewList = props => {
  const id = props.match.params.id;
  const filteredReviews = props.reviews.filter(
    review => `${review.book_id}` === id
  );

  return (
    <ReviewListContainer>
      <h2>Reviews:</h2>
      {filteredReviews.map(review => (
        <ReviewItem review={review} key={review.reviewer} />
      ))}
    </ReviewListContainer>
  );
};

export default ReviewList;
