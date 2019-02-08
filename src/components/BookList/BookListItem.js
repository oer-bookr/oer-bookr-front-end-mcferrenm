import React from "react";
import { Link } from "react-router-dom";

import { BookListItemWrapper } from "../../styles/BookListStyles";

const Book = ({ book: { title, author, image, id, subject } }) => {
  return (
    <Link to={`/book/${id}`}>
      <BookListItemWrapper>
        <img src={image} alt={title} />
        <div className="item-body">
          <h2>{title}</h2>
          <h3>{author}</h3>
          <p>{subject}</p>
        </div>
      </BookListItemWrapper>
    </Link>
  );
};

export default Book;
