import React from "react";
// book: { title, author, publisher, license, image, reviews }

const BookDetails = props => {
  const book = props.books.find(book => `${book.id}` === props.match.params.id);
  const { title, author, publisher, license, image, reviews } = book;

  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{publisher}</p>
      <p>{license}</p>
      <img src={image} alt={title} />
      <h2>Reviews:</h2>
      <h4>{reviews.reviewer}</h4>
      <p>{reviews.rating}</p>
      <p>{reviews.review}</p>
    </div>
  );
};

export default BookDetails;
