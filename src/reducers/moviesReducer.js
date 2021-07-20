import { types } from "../types/types";

const initialState = {
  moviesHome: [],
  upcomingMovies: [],
  pageMoviesHome: 1,
  pageUpcomingMovies: 1,

  search: [],
  detailsMovie: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.mvLoadMoviesHome:
      return {
        ...state,
        moviesHome: [...state.moviesHome,...action.payload],
      };

    case types.mvLoadUpcomingMoviesHome:
      return {
        ...state,
        upcomingMovies: [...action.payload],
      };

    case types.mvNextPageMoviesHome:
      return {
        ...state,
        pageMoviesHome: state.pageMoviesHome + 1,
      };

    case types.mvSearchMovie:
      return {
        ...state,
        search: [...action.payload],
      };

    case types.mvDetailsMovie:
      return {
        ...state,
        detailsMovie: [action.payload],
      };

    default:
      return state;
  }
};
