import React from "react";
import "./modal.css";


function Modal2(props) {

    // Get the modal
const modal = document.getElementById('congratsModal2');

// Get the <span> element that closes the modal
//const span = document.getElementsByClassName("close")[0];

const display = {display: `${props.show}`};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
} 

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