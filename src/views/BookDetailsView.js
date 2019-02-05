import React, { Component } from "react";
import { connect } from "react-redux";

import BookDetails from "../components/BookDetails/BookDetails";
import { getBooks } from "../store/actions/bookListActions";

class BookDetailsView extends Component {
  componentDidMount() {
    if (this.props.books.length === 0) {
      this.props.getBooks();
    }
  }

  render() {
    return <BookDetails {...this.props} books={this.props.books} />;
    // return (
    //   <div>
    //     {this.props.books.map(book => (
    //       <p>{book.title}</p>
    //     ))}
    //   </div>
    // );
  }
}

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  reviews: state.reviewsReducer.reviews
});

export default connect(
  mapStateToProps,
  { getBooks }
)(BookDetailsView);
