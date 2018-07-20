import React from "react";
import "./Score.css";
import { Nav, NavItem } from "reactstrap";

const Score = props => (
  <Nav className="justify-content-center">
    <NavItem>Score: {props.score} | Top Score: 0</NavItem>
  </Nav>
);

export default Score;