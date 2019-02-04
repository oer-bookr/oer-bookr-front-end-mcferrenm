import React from "react";

import BookListItem from "./BookListItem";

const BookList = props => {
  return (
    <div className="book-list-wrapper">
      {props.books.map(book => {
        return <BookListItem key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
