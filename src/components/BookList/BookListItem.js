import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book: { title, author, image, id, subject } }) => {
  return (
    <Link to={`/book/${id}`}>
      <div className="book-list-item-wrapper">
        <img src={image} alt={title} />
        <div className="item-body">
          <h2>{title}</h2>
          <h3>{author}</h3>
          <p>{subject}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
