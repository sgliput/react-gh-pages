import React from "react";
import "./modal.css";


function Modal(props) {
    
//Object to set display property of modal to either "none" or "block"
const display = {display: `${props.show}`};

    return (
        <div id="congratsModal" className="modal" style={display}>
            <div className="modal-content">
                <div className="modal-header">
                <h2>Congratulations!</h2>
                    <span className="close" onClick={props.onHide}>&times;</span>
                    
                </div>
                <div className="modal-body">
                    <p>Well done! You clicked all of them!</p>
                    <p>Tom Hanks would be proud.</p>
                    <p>Want to test yourself further?</p>
                    <button className="yes" onClick={props.level2}>Sure</button> &nbsp; <button className="no" onClick={props.onHide}>No, thanks</button> 
                </div>
            </div>
        </div>
    );
}


export default Modal;