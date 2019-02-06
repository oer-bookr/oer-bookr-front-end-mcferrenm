import React, { Component } from "react";
import { connect } from "react-redux";

import BookForm from "../components/BookForm/BookForm";
import { addBook, getBooks } from "../store/actions/bookListActions";

const CLEARED_BOOK = {
  title: "",
  author: "",
  publisher: "",
  license: "",
  image: "",
  subject: ""
};

class BookFormView extends Component {
  state = {
    bookInputs: {
      title: "",
      author: "",
      publisher: "",
      license: "",
      image: "",
      subject: ""
    }
  };

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      bookInputs: {
        ...prevState.bookInputs,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleAddBook = e => {
    e.preventDefault();

    const payload = {
      ...this.state.bookInputs
    };

    this.props.addBook(payload);

    this.setState({
      reviewInputs: CLEARED_BOOK
    });

    this.props.history.push("/books/all");
  };

  render() {
    return (
      <BookForm
        bookInputs={this.state.bookInputs}
        handleChange={this.handleChange}
        handleAddBook={this.handleAddBook}
      />
    );
  }
}

const mapStateToProps = state => ({
  // books: state.booksReducer.books,
  // reviews: state.reviewsReducer.reviews
});

export default connect(
  mapStateToProps,
  { addBook, getBooks }
)(BookFormView);
