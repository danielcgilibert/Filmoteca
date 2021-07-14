import React from "react";
import { CardMovie } from "../cardMovie/CardMovie";

export const ListMovies = ({moviesHome}) => {
  console.log(moviesHome);
  return (
    <>
      {moviesHome.map((film, index) => {
        if(index > 7){
          return true
        }
        return (
          <div key={film.id} className="d-flex justify-content-center col-md-12 col-lg-4 col-xl-3">
            <CardMovie key={film.id} film={film} id={film.id} />
          </div>
        );
      })}
      </>
  );
};
