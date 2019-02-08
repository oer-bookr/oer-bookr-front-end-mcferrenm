import React from "react";
import { NavLink } from "react-router-dom";
import { FooterContainer } from "../styles/FooterStyles";

const Footer = props => {
  return (
    <FooterContainer>
      <NavLink exact to="/">
        <h1>OER Bookr © 2019</h1>
      </NavLink>
    </FooterContainer>
  );
};

export default Footer;
