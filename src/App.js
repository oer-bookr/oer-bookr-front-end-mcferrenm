import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import { HomeView, BookListView } from "./views";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <h1>OER Bookr</h1>
          <div className="nav-links">
            <NavLink to="/books">Books</NavLink>
            <NavLink exact to="/">
              {" "}
              Home
            </NavLink>
          </div>
        </nav>
        <Route exact path="/" component={HomeView} />
        <Route path="/books" component={BookListView} />
      </div>
    );
  }
}

export default App;
