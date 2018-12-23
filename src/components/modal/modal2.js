import React from "react";
import "./modal.css";


function Modal2(props) {

//Object to set display property of modal to either "none" or "block"
const display = {display: `${props.show}`};

    return (
        <div id="congratsModal2" className="modal" style={display}>
            <div className="modal-content">
                <div className="modal-header">
                <h2>Congratulations!</h2>
                    <span className="close" onClick={props.onHide}>&times;</span>
                    
                </div>
                <div className="modal-body">
                    <p>Outstanding!!</p>
                    <p>You are a true Tom Hanks aficionado.</p>
                    <p>Want to play again?</p>
                    <button className="yes" onClick={props.restart}>Sure</button> 
                </div>
            </div>
        </div>
    );
}


export default Modal2;