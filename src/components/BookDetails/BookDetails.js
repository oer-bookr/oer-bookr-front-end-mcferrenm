import React from "react";
import { Link } from "react-router-dom";

import ReviewList from "../ReviewList/ReviewList";

const BookDetails = props => {
  const book = props.books.find(book => `${book.id}` === props.match.params.id);
  const { title, author, publisher, license, image, id } = book;

  const reviews = props.reviews.filter(review => review.book_id === id);

  return (
    <div className="book-details">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{publisher}</p>
      <p>{license}</p>
      <img src={image} alt={title} />
      <ReviewList reviews={reviews} />
      <Link to={`/book/${id}/addreview`} className="add-review-link">
        Write a Review
      </Link>
    </div>
  );
};

export default BookDetails;
