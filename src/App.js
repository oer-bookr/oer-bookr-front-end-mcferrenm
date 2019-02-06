import React, { Component } from "react";
import { Route } from "react-router-dom";

import {
  LoginView,
  HomeView,
  BookListView,
  BookDetailsView,
  ReviewFormView,
  BookFormView,
  NewUserFormView,
  NavView
} from "./views";

import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavView} />
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/addnewuser" component={NewUserFormView} />
        <Route exact path="/" component={HomeView} />
        <Route path="/books/:subject" component={BookListView} />
        <Route exact path="/book/:id" component={BookDetailsView} />
        <Route path="/book/:id/addreview" component={ReviewFormView} />
        <Route path="/book-form" component={BookFormView} />
        <Footer />
      </div>
    );
  }
}

export default App;
