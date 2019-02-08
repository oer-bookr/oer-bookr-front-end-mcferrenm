import React, { Component } from "react";
import { connect } from "react-redux";

import JumboSearch from "../components/JumboSearch";
import { searchBooks } from "../store/actions/searchActions";

class JumboSearchView extends Component {
  state = {
    searchInput: ""
  };

  handleChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  searchBooks = () => {
    this.props.searchBooks(this.state.searchInput);

    this.setState({
      searchInput: ""
    });
  };
  render() {
    return (
      <JumboSearch
        books={this.props.books}
        handleChange={this.handleChange}
        searchInput={this.state.searchInput}
        searchBooks={this.searchBooks}
      />
    );
  }
}
const mapStateToProps = state => ({
  books: state.booksReducer.books
});

export default connect(
  mapStateToProps,
  { searchBooks }
)(JumboSearchView);
