import { types } from "../types/types";
import { loadMovies } from "../helpers/loadMoviesHome";
import { finishLoading, startLoading } from "./auth";

export const loadMoviesHome = (movies) => ({
    type: types.mvLoadMoviesHome,
    payload: movies,
  });

  export const nextPageHome = () => ({
    type: types.mvNextPageMoviesHome,
  });


export const startLoadMoviesHome = () => {
    return (dispatch) => {  
        loadMovies().then( ({results }) => {
            dispatch(loadMoviesHome(results))
        })

     
    };
  };

  export const nextPageLoadMoviesHome = (page) => {
    
    return (dispatch) => {  
      dispatch(startLoading());
      dispatch(nextPageHome());
        loadMovies(page).then( ({results }) => {
            dispatch(loadMoviesHome(results))
            dispatch(finishLoading());

        })

     
    };
  };