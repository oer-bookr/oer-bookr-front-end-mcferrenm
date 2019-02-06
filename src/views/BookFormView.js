import React, { Component } from "react";
import { connect } from "react-redux";

import BookForm from "../components/BookForm/BookForm";
import {
  addBook,
  getBooks,
  updateBook
} from "../store/actions/bookListActions";

const CLEARED_BOOK = {
  title: "",
  author: "",
  publisher: "",
  license: "",
  image: "",
  subject: "",
  id: ""
};

class BookFormView extends Component {
  state = {
    bookInputs: {
      title: "",
      author: "",
      publisher: "",
      license: "",
      image: "",
      subject: "",
      id: ""
    }
  };

  componentDidMount() {
    if (this.props.isEditingBook) {
      this.populateForm(this.props.editingId);
    }
  }

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      bookInputs: {
        ...prevState.bookInputs,
        [e.target.name]: e.target.value
      }
    }));
  };

  populateForm = id => {
    const book = this.props.books.find(book => book.id === Number(id));
    const { title, author, publisher, license, image, subject } = book;

    this.setState({
      bookInputs: {
        title,
        author,
        publisher,
        license,
        image,
        subject,
        id
      }
    });
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

  handleUpdateBook = e => {
    e.preventDefault();

    this.props.updateBook(this.state.bookInputs);

    this.props.history.push("/books/all");
  };

  render() {
    if (window.localStorage.getItem("username") !== "the2bo5") {
      this.props.history.push("/login");
    }
    return (
      <BookForm
        bookInputs={this.state.bookInputs}
        isEditingBook={this.props.isEditingBook}
        handleChange={this.handleChange}
        handleAddBook={this.handleAddBook}
        handleUpdateBook={this.handleUpdateBook}
      />
    );
  }
}

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  editingId: state.booksReducer.editingId,
  isEditingBook: state.booksReducer.isEditingBook
  // reviews: state.reviewsReducer.reviews
});

export default connect(
  mapStateToProps,
  { addBook, getBooks, updateBook }
)(BookFormView);
