import React from "react";

const Home = props => {
  console.log(props);
  const handleNavToBooks = e => {
    e.preventDefault();
    props.history.push("/books/all");
  };
  return (
    <div className="home-wrapper">
      <button onClick={handleNavToBooks}>Get OER Books!</button>
    </div>
  );
};

export default Home;
