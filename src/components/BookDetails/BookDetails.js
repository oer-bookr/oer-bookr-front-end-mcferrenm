import React from "react";
import { Link } from "react-router-dom";

import { ReviewListView } from "../../views";
import { BookDetailsContainer } from "../../styles/BookDetailsStyles";
import { Button } from "../../styles/reusables/Button";

const BookDetails = props => {
  const id = Number(props.match.params.id);
  const book = props.books.find(book => book.id === id);

  if (!book) {
    return <h2>Book not found!</h2>;
  }

  return (
    <BookDetailsContainer>
      <div className="buttons">
        <Link to={`/book/${book.id}/addreview`}>
          <Button>Write a Review</Button>
        </Link>
        <Button onClick={e => props.handleDeleteBook(e, id)}>
          Delete Book
        </Button>
        <Button onClick={e => props.handleEditBook(e, id)}>Update Book</Button>
      </div>
      <div className="book-details-body">
        <div className="book-details-text">
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <p>{book.publisher}</p>
          <p>{book.license}</p>
        </div>

        <img src={book.image} alt={book.title} />
      </div>
      <ReviewListView {...props} />
    </BookDetailsContainer>
  );
};

export default BookDetails;
