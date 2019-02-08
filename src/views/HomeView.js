import React from "react";

import Home from "../components/Home";

const HomeView = props => {
  return (
    <div>
      <Home history={props.history} />
    </div>
  );
};

export default HomeView;
