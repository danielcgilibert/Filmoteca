import { types } from "../types/types";

const initialState = {
  moviesHome: [],
  page: 1,
  search:[],
  detailsMovie: []
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.mvLoadMoviesHome:
      return {
        ...state,
        moviesHome: [...action.payload],
      };

    case types.mvNextPageMoviesHome:
      return {
        ...state,
        page: state.page + 1,
      };

      case types.mvSearchMovie:
      return {
        ...state,
        search: [...action.payload]
      };

      case types.mvDetailsMovie:
      return {
        ...state,
        detailsMovie: [action.payload]
      };

    default:
      return state;
  }
};
