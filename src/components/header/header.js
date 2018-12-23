import React from "react";
import "./header.css";

function Header(props) {

    //Object to set position property of counter to either "fixed" or "absolute"
    const position = {position: props.counter};  

    return (
        <div className="jumbotron">
            <div className="container">
            
            <h1>The Amazingly Clickable Tom Hanks!</h1>
            <h3 className="counter" style={position}>Correct Count: {props.count}</h3>
           
            <br />
            <div className="instructions">
            <p>In this Clicky game, click on each movie picture of Tom Hanks, but only once each, to get the counter up to 15.</p>
            <p>Clicking more than once will cause the game to start all over.</p>
            <p>Good luck!</p>
            </div>
            </div>
            <br /><br /><br />
        </div>
    );
}


export default Header;