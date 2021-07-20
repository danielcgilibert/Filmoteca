import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPageLoadMoviesHome, startLoadMoviesHome } from "../actions/movies";
import { ListMovies } from "../components/listMovies/ListMovies";
import { NavBar } from "../components/navbar/NavBar";
import InfiniteScroll from 'react-infinite-scroll-component';

export const HomeScreen = () => {
  const { pageMoviesHome, moviesHome, upcomingMovies } = useSelector(
    (state) => state.mv
  );
  const { loading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleNextPage = () => {
    dispatch(nextPageLoadMoviesHome(pageMoviesHome + 1));
  };

  const handleScroll = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };



  const handleScrollLoad = e => {
    // const {scrollTop, clientHeight, scrollHeight } = e.currentTarget
    console.log("as");
  }

  useEffect(() => {
    dispatch(startLoadMoviesHome());
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [handleNextPage]);

  return (
    <>
      <NavBar />
      <div className="container ">
        <div className="jumbotron">
          <h1 className="display-4 mt-5">Bienvenido a Filmoteca</h1>
        </div>

        <div className="row  d-flex justify-content-center">
          <div className="col-md-12 ">
            <div
              id="carouselExampleIndicators"
              className="carousel slide "
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                {moviesHome.map((movie,index) => {
                  return (
                    <>
                    
                      <div className={`carousel-item ${index===0?"active":""}`}>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>{movie.title} </h5>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>


        <div className="row mt-4">
          <h2>Próximas películas </h2>
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
          
        </div>


        <hr className="my-4" />
        <h2>Mejor Valoradas</h2>

        <div className="row">
          
            
          
            <>
              <div  className="d-flex flex-row-reverse mt-3">
                <button onClick={handleScroll} className="btn">
                  <i className="bi bi-arrow-down botonAbajo"></i>
                </button>
              </div>


            
            <ListMovies moviesHome={moviesHome} />

            <InfiniteScroll
              dataLength={moviesHome.length} //This is important field to render the next data
              next={handleNextPage}
              hasMore={true}

              loader={<div className="col-md-12 d-flex justify-content-center p-3">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>}
              pullDownToRefreshThreshold={50}

            >


            </InfiniteScroll>
            
            </>
          
        </div>


       
      </div>
    </>
  );
};
