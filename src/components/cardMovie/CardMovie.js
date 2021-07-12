import React from "react";

export const CardMovie = ({film}) => {

  const { poster_path} = film;

  return (
    <div class="pointer card mt-2" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original//${poster_path})`  }}>
      <div class="card-body">
        {/* <h1 class="card-title"><strong>{title}</strong> </h1> */}
        <p class="card-text">
          {/* {overview} */}
        </p>
        {/* <button  class="btn btn-outline-primary">
          Más Información
        </button> */}
      </div>
    </div>
  );
};
