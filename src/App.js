import React, { Component } from "react";
import { Route } from "react-router-dom";

import {
  LoginView,
  HomeView,
  BookListView,
  BookDetailsView,
  ReviewFormView,
  BookFormView
} from "./views";

import Nav from "./components/Nav";

import "./App.css";

class App extends Component {
    
    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll() {
        const scrollPos = document.scrollingElement.scrollTop;
        if (scrollPos > 300) {
            document.getElementById("nav-bar").classList.add("fixed");
            document.getElementById("nav-container").classList.remove("absolute");
            document.getElementById("nav-background").classList.add("extend");
            debugger
        }else{
            document.getElementById("nav-background").classList.remove("extend");
            window.setTimeout(() => {
                document.getElementById("nav-bar").classList.remove("fixed");
                document.getElementById("nav-container").classList.add("absolute");
            }, 400);
        }
    }
    
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/" component={HomeView} />
        <Route path="/books/:subject" component={BookListView} />
        <Route exact path="/book/:id" component={BookDetailsView} />
        <Route path="/book/:id/addreview" component={ReviewFormView} />
        <Route path="/addbook" component={BookFormView} />
      </div>
    );
  }
}

export default App;
