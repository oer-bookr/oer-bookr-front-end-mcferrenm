import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book: { title, author, image, id } }) => {
  return (
    <Link to={`/book/${id}`}>
      <div className="book-list-item-wrapper">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
    </Link>
  );
};

export default Book;
