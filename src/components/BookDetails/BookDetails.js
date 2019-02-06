import React from "react";
import { Link } from "react-router-dom";

import { ReviewListView } from "../../views";

const BookDetails = props => {
  const id = Number(props.match.params.id);
  const book = props.books.find(book => book.id === id);

  if (!book) {
    return <h2>Loading item data...</h2>;
  }

  return (
    <div className="book-details">
      <div className="buttons">
        <Link to={`/book/${book.id}/addreview`} className="add-review-link">
          Write a Review
        </Link>
        <button onClick={e => props.handleDeleteBook(e, id)}>
          Delete Book
        </button>
      </div>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.publisher}</p>
      <p>{book.license}</p>
      <img src={book.image} alt={book.title} />
      <ReviewListView {...props} />
    </div>
  );
};

export default BookDetails;
