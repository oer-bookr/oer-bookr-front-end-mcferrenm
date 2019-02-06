import React from "react";

const BookForm = props => {
  return (
    <div className="book-form">
      <div className="book-form-header">
        <h1>Add a Book</h1>
      </div>
      <form id="book-form">
        <input
          type="text"
          name="title"
          placeholder="Enter title..."
          value={props.title}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Enter author..."
          value={props.author}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="publisher"
          placeholder="Enter publisher..."
          value={props.publisher}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="license"
          placeholder="Enter license..."
          value={props.license}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Enter image url..."
          value={props.image}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter subject..."
          value={props.subject}
          onChange={props.handleChange}
        />
        <button onClick={props.handleAddBook}>Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
