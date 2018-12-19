import React from "react";
import "./picture.css";

function TomHanksPic(props) {    
   
    const movieProps = props.movies.map(movie => (
        <div className="card" key={movie.id}>
        <img className="hanksimg" alt={movie.name} src={movie.image} onClick={() => props.handleIncrement(movie.id)} />
        </div>
      ));
    

    return (
        <div className="imgArea">
            {movieProps}
        </div>
    );
}

export default TomHanksPic;