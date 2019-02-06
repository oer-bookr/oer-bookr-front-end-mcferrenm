import React from "react";

const BookForm = props => {
  return (
    <div className="book-form">
      <div className="book-form-header">
        {props.isEditingBook ? <h1>Updating Book...</h1> : <h1>Add a Book</h1>}
      </div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Enter title..."
          value={props.bookInputs.title}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Enter author..."
          value={props.bookInputs.author}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="publisher"
          placeholder="Enter publisher..."
          value={props.bookInputs.publisher}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="license"
          placeholder="Enter license..."
          value={props.bookInputs.license}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Enter image url..."
          value={props.bookInputs.image}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter subject..."
          value={props.bookInputs.subject}
          onChange={props.handleChange}
        />
        {props.isEditingBook ? (
          <button onClick={props.handleUpdateBook}>Update</button>
        ) : (
          <button onClick={props.handleAddBook}>Add</button>
        )}
      </form>
    </div>
  );
};

export default BookForm;
