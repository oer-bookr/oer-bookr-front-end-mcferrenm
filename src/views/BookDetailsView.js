import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import BookDetails from "../components/BookDetails/BookDetails";
import {
  getBooks,
  deleteBook,
  editBook,
  updateBook
} from "../store/actions/bookListActions";

class BookDetailsView extends Component {
  componentDidMount() {
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    this.props.getBooks(requestOptions);
  }

  handleDeleteBook = (e, id) => {
    e.preventDefault();

    this.props.deleteBook(id);

    this.props.history.push("/books/all");
  };

  handleEditBook = (e, editingId) => {
    e.preventDefault();

    this.props.editBook(editingId);

    this.props.history.push("/book-form");
  };

  render() {
    if (!localStorage.jwt) {
      this.props.history.push("/login");
    }
    return (
      <>
        {this.props.isLoadingBooks && (
          <Loader type="Grid" color="#somecolor" height={80} width={80} />
        )}
        <BookDetails
          {...this.props}
          books={this.props.books}
          handleDeleteBook={this.handleDeleteBook}
          handleEditBook={this.handleEditBook}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  isLoadingBooks: state.booksReducer.isLoadingBooks,
  reviews: state.reviewsReducer.reviews
});

export default connect(
  mapStateToProps,
  { getBooks, deleteBook, editBook, updateBook }
)(BookDetailsView);
