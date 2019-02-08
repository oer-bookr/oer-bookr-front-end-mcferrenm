import React from "react";

import BookListItem from "./BookListItem";
import { BookListWrapper } from "../../styles/BookListStyles";

const BookList = props => {
  const subject = props.match.params.subject;

  const filteredBooks = props.books.filter(book => {
    // return book.title.includes(props.searchInput);

    if (subject === "all") {
      return book;
    }

    return book.subject.toLowerCase().includes(subject);
  });

  return (
    <BookListWrapper>
      {filteredBooks.map(book => {
        return <BookListItem key={book.id} book={book} />;
      })}
    </BookListWrapper>
  );
};

export default BookList;
