import React from "react";
import { useSelector } from "react-redux";
import { CardMovie } from "../cardMovie/CardMovie";

export const ListMovies = () => {
  const { moviesHome } = useSelector((state) => state.mv);

  return (
    <>
      {moviesHome.map((film) => {
        return (
          <div key={film.id} className="d-flex justify-content-center col-md-12 col-lg-4 col-xl-3">
            <CardMovie key={film.id} film={film} id={film.id} />
          </div>
        );
      })}
      </>
  );
};
