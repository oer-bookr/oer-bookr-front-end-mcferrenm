import React from "react";

import { HomeContainer } from "../styles/HomeStyles";

const Home = props => {
  const handleNavToBooks = e => {
    e.preventDefault();
    props.history.push("/books/all");
  };
  return (
    <HomeContainer>
      <button onClick={handleNavToBooks}>Get OER Books!</button>
    </HomeContainer>
  );
};

export default Home;
