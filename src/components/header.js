import React from "react";
import "./header.css";

function Header(props) {
    return (
        <div className="jumbotron">
            <h1>Tom Hanks Clicky</h1>
            <p>Correct Count: {props.count}</p>
        </div>
    );
}


export default Header;