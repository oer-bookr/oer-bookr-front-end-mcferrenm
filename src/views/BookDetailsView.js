import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import BookDetails from "../components/BookDetails/BookDetails";
import { getBooks, deleteBook } from "../store/actions/bookListActions";

class BookDetailsView extends Component {
  componentDidMount() {
    if (this.props.books.length === 0) {
      this.props.getBooks();
    }
  }

  handleDeleteBook = (e, id) => {
    e.preventDefault();

    this.props.deleteBook(id);

    this.props.history.push("/books/all");
  };

  render() {
    return (
      <>
        {this.props.isLoadingBooks && (
          <Loader type="Grid" color="#somecolor" height={80} width={80} />
        )}
        <BookDetails
          {...this.props}
          books={this.props.books}
          handleDeleteBook={this.handleDeleteBook}
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
  { getBooks, deleteBook }
)(BookDetailsView);
