import React from "react";
import { Link } from "react-router-dom";

export const CardMovie = ({film}) => {

  const {id, poster_path} = film;

  return (
    <Link to={`/details/${id}`} key={film.id}>
      <div key={film.id} className="pointer card mt-2" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original//${poster_path})`  }}>
      <div className="card-body">
        {/* <h1 class="card-title"><strong>{title}</strong> </h1> */}
        <p className="card-text">
          {/* {overview} */}
        </p>
        {/* <button  class="btn btn-outline-primary">
          Más Información
        </button> */}
      </div>
    </div>
</Link>

    
  );
};
