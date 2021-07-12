import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPageLoadMoviesHome, startLoadMoviesHome } from "../actions/movies";
import { ListMovies } from "../components/listMovies/ListMovies";
import { NavBar } from "../components/navbar/NavBar";

export const HomeScreen = () => {
  const {page} = useSelector(state => state.mv)
  const dispatch = useDispatch()

  const handleNextPage = () => {
  dispatch(nextPageLoadMoviesHome(page + 1))
  }
  
  useEffect(() => {
    dispatch(startLoadMoviesHome());
  }, [])
  
  return (
    <>
      <NavBar />

      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4 mt-5">Bienvenido a Filmoteca</h1>
          <hr class="my-4" />
          <h2>Novedades Populares</h2>
        </div>
        <div className="row">
        <ListMovies />
        
        <button 
        onClick={handleNextPage}
        className="login__input mt-3">
        <i class="bi bi-arrow-down"></i> 

        </button>

        </div>
      </div>
    </>
  );
};
