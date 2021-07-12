import { types } from "../types/types";

const initialState = {
  moviesHome: [],
  page: 1,
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

    default:
      return state;
  }
};
