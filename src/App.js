import React, { Component } from "react";
import { Route } from "react-router-dom";

import { LoginView, HomeView, BookListView, BookDetailsView } from "./views";
import Nav from "./components/Nav";
import SearchJumbo from "./components/JumboSearch";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SearchJumbo />
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/" component={HomeView} />
        <Route path="/books/:subject" component={BookListView} />
        <Route path="/book/:id" component={BookDetailsView} />
      </div>
    );
  }
}

export default App;
