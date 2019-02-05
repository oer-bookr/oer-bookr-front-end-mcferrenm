import React from "react";

import BookListItem from "./BookListItem";

const BookList = props => {
  // const subject = props.match.params.subject;

  const filteredBooks = props.books.filter(book => {
    // if (subject === "all") {
    //   return book;
    // }
    return book.title.includes(props.searchInput);

    // return book.subject.toLowerCase().includes(subject);
  });

  return (
    <div className="book-list-wrapper">
      {filteredBooks.map(book => {
        return <BookListItem key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
