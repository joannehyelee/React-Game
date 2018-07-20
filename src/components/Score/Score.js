import React from "react";
import "./Score.css";
import { Nav, NavItem } from "reactstrap";

class Score extends React.Component {

    render() {
        return (
            <Nav className="justify-content-center">
                <NavItem>Score: 0 | Top Score: 0</NavItem>
            </Nav>
        );
    }

}

export default Score;