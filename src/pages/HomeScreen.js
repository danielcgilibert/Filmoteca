import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPageLoadMoviesHome, startLoadMoviesHome } from "../actions/movies";
import { ListMovies } from "../components/listMovies/ListMovies";
import { NavBar } from "../components/navbar/NavBar";

export const HomeScreen = () => {
  const { pageMoviesHome, moviesHome,upcomingMovies} = useSelector((state) => state.mv);
  const { loading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleNextPage = () => {
    dispatch(nextPageLoadMoviesHome(pageMoviesHome + 1));
  };

  const handleScroll = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    dispatch(startLoadMoviesHome());
  }, [dispatch]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [handleNextPage]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4 mt-5">Bienvenido a Filmoteca</h1>
          <hr className="my-4" />
          <h2>Mejor Valoradas</h2>
        </div>
        <div className="row">
          {loading ? (
            <div className="col-md-12 d-flex justify-content-center p-3">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
            </div>
          ) : (
            <>
              <d iv className="d-flex flex-row-reverse mt-3">
                <button onClick={handleScroll} className="btn">
                  <i className="bi bi-arrow-down botonAbajo"></i>
                </button>
              </d>

              <ListMovies moviesHome={moviesHome} />
              <button onClick={handleNextPage} className="login__input mt-3">
                <i className="bi bi-arrow-down"></i>
              </button>
            </>
          )}
        </div>

            <hr/>

            <div className="row">
        <h2>Próximas películas  </h2>

          
            <>
              <div className="d-flex flex-row-reverse mt-3">
                <button onClick={handleScroll} className="btn">
                  <i className="bi bi-arrow-down botonAbajo"></i>
                </button>
              </div>

              <ListMovies moviesHome={upcomingMovies} />
              {/* <button onClick={handleNextPage} className="login__input mt-3">
                <i className="bi bi-arrow-down"></i>
              </button> */}
            </>
          )
        </div>

      </div>
    </>
  );
};
