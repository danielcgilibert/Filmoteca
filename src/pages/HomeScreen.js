import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPageLoadMoviesHome, startLoadMoviesHome } from "../actions/movies";
import { ListMovies } from "../components/listMovies/ListMovies";
import { NavBar } from "../components/navbar/NavBar";

export const HomeScreen = () => {
  const { page } = useSelector((state) => state.mv);
  const { loading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleNextPage = () => {
    dispatch(nextPageLoadMoviesHome(page + 1));
  };

  const handleScroll = () => {
    window.scrollTo(0,document.body.scrollHeight);
  }

  useEffect(() => {
    dispatch(startLoadMoviesHome());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [handleNextPage]);

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
          {loading ? (
            <div class="col-md-12">
              <div class="spinner text-center ">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <>
            <div className="d-flex flex-row-reverse mt-3">
              <button onClick={handleScroll} className="btn">
                <i class="bi bi-arrow-down botonAbajo"></i>
              </button>

            </div>

              <ListMovies />
              <button onClick={handleNextPage} className="login__input mt-3">
                <i class="bi bi-arrow-down"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
