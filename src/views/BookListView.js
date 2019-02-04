import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import SubNav from "../components/BookList/SubNav";
import BookList from "../components/BookList/BookList";
import { getBooks } from "../store/actions/bookListActions";

class BookListView extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    return (
      <div>
        <SubNav />
        {this.props.isLoadingBooks && (
          <Loader type="Grid" color="#somecolor" height={80} width={80} />
        )}
        <BookList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  isLoadingBooks: state.booksReducer.isLoadingBooks
});

export default connect(
  mapStateToProps,
  { getBooks }
)(BookListView);
