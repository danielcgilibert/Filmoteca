import { types } from "../types/types";
import { loadMovies } from "../helpers/loadMoviesHome";
import { finishLoading, startLoading } from "./auth";
import { searchMovieAPI } from "../helpers/searchMovie";
import { loadSearchFilm } from "../helpers/loadSearchMovie";
import { loadPeople } from "../helpers/loadPopleMovie";
import { trailerMovie } from "../helpers/loadTrailersDetailsMovie";
import { upcomingMovies } from "../helpers/loadUpcomingMovies";

export const loadMoviesHome = (movies) => ({
  type: types.mvLoadMoviesHome,
  payload: movies,
});

export const LoadUpcomingMovies = (movies) => ({
  type: types.mvLoadUpcomingMoviesHome,
  payload: movies,
});

export const nextPageHome = () => ({
  type: types.mvNextPageMoviesHome,
});

export const searchMovies = (movies) => ({
  type: types.mvSearchMovie,
  payload: movies,
});

export const detailsMovieAction = (details) => {
  console.log(details);
  return {
    type: types.mvDetailsMovie,
    payload: details,
  };
};

export const startLoadMoviesHome = () => {

  return (dispatch) => {
    dispatch(startLoading());
    loadMovies().then(({ results }) => {
      upcomingMovies().then(({ results:nuevas }) => {
        dispatch(loadMoviesHome(results));
        dispatch(LoadUpcomingMovies(nuevas));
        dispatch(finishLoading());

      });
    });
  };
};

export const nextPageLoadMoviesHome = (page) => {
  return (dispatch) => {
    dispatch(startLoading());
    dispatch(nextPageHome());
    loadMovies(page).then(({ results }) => {
      dispatch(loadMoviesHome(results));
      dispatch(finishLoading());
    });
  };
};

export const searchMovie = (name) => {
  return (dispatch) => {
    dispatch(startLoading());
    searchMovieAPI(name).then(({ results }) => {
      dispatch(searchMovies(results));
      dispatch(finishLoading());
    });
  };
};

export const loadDetailsMovie = (id) => {
  let datos = [];
  return (dispatch) => {
    dispatch(startLoading());
    loadSearchFilm(id).then((details) => {
      console.log(details);
      loadPeople(id).then((people) => {
        trailerMovie(id).then((trailers) => {
          datos = [details, people, trailers];
          dispatch(detailsMovieAction(datos));
          dispatch(finishLoading());
        });
      });
    });
  };
};
