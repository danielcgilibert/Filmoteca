import React from "react";
import { useSelector } from "react-redux";
import { CardMovie } from "../cardMovie/CardMovie";

export const ListMovies = () => {
  const { moviesHome } = useSelector((state) => state.mv);

  return (
    <div className="row">
      {moviesHome.map((film) => {
        return (
          <div class="col-md-3">
            <CardMovie key={film.id} film={film} />
          </div>
        );
      })}
    </div>
  );
};
