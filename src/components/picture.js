import React from "react";
import "./picture.css";

function TomHanksPic(props) {

    const display = {display: `${props.showInput}`};
    //const correct = {border: "2px solid green"};
    //const incorrect = {border: "2px solid red"};
   
   

    const movieProps = props.movies.map(movie => (
      
        <div className="card" key={movie.id}>
            <img className="hanksimg card-img-top" alt={movie.name} src={movie.image} onClick={() => props.handleIncrement(movie.id)} />
            <div className="card-body" style={display}>
            <label>Guess the movie!</label>
                <input type="text" className="form-control" id={movie.id} onKeyUp={(e) => props.handleLevel2(e, movie.movie, movie.id)}
                //{this.val() === movie.name ? document.getElementById(movie.id).style.border="2px solid green" : document.getElementById(movie.id).style.border="2px solid red"} 
                />
            </div>
        </div>
        
    ));


    return (
        <div className="imgArea">
            {movieProps}
        </div>
    );
}

export default TomHanksPic;