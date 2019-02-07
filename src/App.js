import React, { Component } from "react";
import { Route } from "react-router-dom";

import {
  LoginView,
  HomeView,
  BookListView,
  BookDetailsView,
  ReviewFormView,
  BookFormView,
  NavView
} from "./views";

import { AppContainer } from "./styles/AppStyles";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Route path="/" component={NavView} />

        <Route exact path="/login" component={LoginView} />
        <Route exact path="/" component={HomeView} />
        <Route path="/books/:subject" component={BookListView} />
        <Route exact path="/book/:id" component={BookDetailsView} />
        <Route path="/book/:id/addreview" component={ReviewFormView} />
        <Route path="/book-form" component={BookFormView} />

        <Footer />
      </AppContainer>
    );
  }
}

export default App;
