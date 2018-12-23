import React from "react";
import "./picture.css";

function TomHanksPic(props) {
    //Object to set display property of input fields to either "none" or "block"
    const display = {display: `${props.showInput}`};

    //Maps over movie array to generate cards using values from the array elements and click events from props
    const movieProps = props.movies.map(movie => (
      
        <div className="card" key={movie.id}>
            <img className="hanksimg card-img-top" alt={movie.name} src={movie.image} onClick={() => props.handleIncrement(movie.id)} />
            <div className="card-body" style={display}>
            <label>Guess the movie!</label>
                <input type="text" className="form-control" id={movie.id} onKeyUp={(e) => props.handleLevel2(e, movie.movie, movie.id)}
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