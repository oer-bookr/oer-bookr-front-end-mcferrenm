import React, { Component } from "react";
import { Route } from "react-router-dom";

import { HomeView, BookListView, BookDetailsView } from "./views";
import Nav from "./components/Nav";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={HomeView} />
        <Route exact path="/books" component={BookListView} />
        <Route path="/book/:id" component={BookDetailsView} />
      </div>
    );
  }
}

export default App;
