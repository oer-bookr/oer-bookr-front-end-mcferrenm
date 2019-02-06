import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { JumboSearchView } from "./";
import SubNav from "../components/BookList/SubNav";
import BookList from "../components/BookList/BookList";
import { getBooks } from "../store/actions/bookListActions";

class BookListView extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    if (window.localStorage.getItem("username") !== "the2bo5") {
      this.props.history.push("/login");
    }
    return (
      <div>
        <Route path="/books/:subject" component={JumboSearchView} />
        <SubNav />
        {this.props.isLoadingBooks && (
          <Loader type="Grid" color="#somecolor" height={80} width={80} />
        )}
        <BookList
          {...this.props}
          searchInput={this.props.searchInput}
          books={this.props.books}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  isLoadingBooks: state.booksReducer.isLoadingBooks,
  searchInput: state.searchReducer.searchInput
});

export default connect(
  mapStateToProps,
  { getBooks }
)(BookListView);
