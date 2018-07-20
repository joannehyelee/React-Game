import React from "react";
import "./Header.css";
import { Jumbotron } from "reactstrap";

class Header extends React.Component {

    render() {
        return (
            <div className="text-center">
                <Jumbotron>
                    <h1>Clicky Game</h1>
                </Jumbotron>
            </div>
        );
    }

}

export default Header;