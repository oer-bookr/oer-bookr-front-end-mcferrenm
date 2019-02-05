import React from "react";
import { Link } from "react-router-dom";

import { ReviewListView } from "../../views";

const BookDetails = props => {
  const book = props.books.find(book => `${book.id}` === props.match.params.id);
  const { title, author, publisher, license, image, id } = book;

  return (
    <div className="book-details">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{publisher}</p>
      <p>{license}</p>
      <img src={image} alt={title} />
      <ReviewListView {...props} />
      <Link to={`/book/${id}/addreview`} className="add-review-link">
        Write a Review
      </Link>
    </div>
  );
};

export default BookDetails;
