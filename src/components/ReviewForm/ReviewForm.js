import React from "react";

const ReviewFormView = props => {
  const book = props.books.find(book => `${book.id}` === props.match.params.id);
  const { title, author, publisher, license, image, reviews, id } = book;
  return (
    <div className="review-form">
      <div className="review-form-header">
        <h1>Addding review to:</h1>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <img src={image} alt={title} />
      </div>
      <form id="review-form">
        <input type="text" name="reviewer" placeHolder="Add name..." />
        <textarea name="comment" form="review-form">
          Add review...
        </textarea>
        <select className="rating-dropdown">
          <option value="1">⭐️</option>
          <option value="2">⭐️⭐️</option>
          <option value="3">⭐️⭐️⭐️</option>
          <option value="4">⭐️⭐️⭐️⭐️</option>
          <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
        </select>
        <button>Add review</button>
      </form>
    </div>
  );
};

export default ReviewFormView;
