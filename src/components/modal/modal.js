import React from "react";


function Modal(props) {

    // Get the modal
const modal = document.getElementById('congratsModal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onClick = function() {
//   modal.style.display = `${props.show}`;
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = `${props.show}`;
// }

const display = {display: `${props.show}`};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
} 

    return (
        <div id="congratsModal" className="modal" style={display}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={props.onHide}>&times;</span>
                    <h2>Modal Header</h2>
                </div>
                <div className="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
                <div className="modal-footer">
                    <h3>Modal Footer</h3>
                </div>
            </div>
        </div>
    );
}


export default Modal;