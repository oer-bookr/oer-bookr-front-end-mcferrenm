import React from "react";

import BookItem from "./BookItem";

const BookList = props => {
  return (
    <div className="book-list">
      {props.books.map(book => {
        return <BookItem key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
