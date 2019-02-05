import React, { Component } from "react";
import { Route } from "react-router-dom";

import {
  LoginView,
  HomeView,
  BookListView,
  BookDetailsView,
  ReviewFormView,
  JumboSearchView
} from "./views";

import Nav from "./components/Nav";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route path="/books/:subject" component={JumboSearchView} />
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/" component={HomeView} />
        <Route path="/books/:subject" component={BookListView} />
        <Route exact path="/book/:id" component={BookDetailsView} />
        <Route path="/book/:id/addreview" component={ReviewFormView} />
      </div>
    );
  }
}

export default App;
