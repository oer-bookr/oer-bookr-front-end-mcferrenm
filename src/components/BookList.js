import React from "react";

import BookItem from "./BookItem";

const BookList = props => {
  return (
    <div>
      {props.books.map(book => {
        return <BookItem book={book} />;
      })}
    </div>
  );
};

export default BookList;
