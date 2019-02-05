import React from "react";

const ReviewForm = props => {
  const book = props.books.find(book => `${book.id}` === props.match.params.id);
  const { title, author, image } = book;
  return (
    <div className="review-form">
      <div className="review-form-header">
        <h1>Addding review to:</h1>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <img src={image} alt={title} />
      </div>

      <form id="review-form">
        <input
          type="text"
          name="reviewer"
          value={props.reviewInputs.reviewer}
          onChange={props.handleChange}
          placeholder="Enter name..."
        />
        <textarea
          name="review"
          value={props.reviewInputs.review}
          onChange={props.handleChange}
          form="review-form"
        />
        <div className="rating-stars">
          <span
            role="img"
            aria-label="1 Star"
            data-rating="1"
            onClick={props.handleRating}
          >
            ⭐️
          </span>
          <span
            role="img"
            aria-label="2 Star"
            data-rating="2"
            onClick={props.handleRating}
          >
            ⭐️
          </span>
          <span
            role="img"
            aria-label="3 Star"
            data-rating="3"
            onClick={props.handleRating}
          >
            ⭐️
          </span>
          <span
            role="img"
            aria-label="4 Star"
            data-rating="4"
            onClick={props.handleRating}
          >
            ⭐️
          </span>
          <span
            role="img"
            aria-label="5 Star"
            data-rating="5"
            onClick={props.handleRating}
          >
            ⭐️
          </span>
        </div>

        <button onClick={props.handleAddReview}>Add review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
