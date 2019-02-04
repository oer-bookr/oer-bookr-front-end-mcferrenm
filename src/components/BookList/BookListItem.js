import React from "react";

const Book = ({
  book: { title, author, publisher, license, image, reviews }
}) => {
  return (
    <div className="book-list-item-wrapper">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{publisher}</p>
      <p>{license}</p>
      <img src={image} alt={title} />
      <h4>{reviews.reviewer}</h4>
      <p>{reviews.rating}</p>
      <p>{reviews.review}</p>
    </div>
  );
};

export default Book;
