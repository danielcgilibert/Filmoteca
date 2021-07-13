import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadDetailsMovie } from "../actions/movies";
import { NavBar } from "../components/navbar/NavBar";

export const DetailsScreen = () => {
  const { id } = useParams();
  const { detailsMovie } = useSelector((state) => state.mv);
  const { loading } = useSelector((state) => state.ui);

  const [castOpen, setCastOpen] = useState(false);

  if (detailsMovie.length > 0) {
    var {
      overview,
      backdrop_path,
      poster_path,
      release_date,
      vote_average,
      title,
    } = detailsMovie[0][0];

    var { cast } = detailsMovie[0][1];
  }

  console.log(vote_average);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDetailsMovie(id));
  }, []);

  return (
    <>
      <NavBar />

      {detailsMovie.length > 0 && !loading ? (
        <div
          className="container-fluid imagenPortada"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        >
          <div className="row d-flex justify-content-center mb-5 ">
            <div className="col-md-12">
              <div className="container">
                <div className="row datosPelicula">
                  <div className="col-md-12 mt-5 px-5">
                    <h1>{title}</h1>
                    <h5>
                      <i className="bi bi-calendar"></i> {release_date}
                    </h5>
                    <br />
                    <hr />
                    <div className="row">
                      <div className="col-md-4 mt-2 text-center ">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                          alt="..."
                          className="img-thumbnail caratula"
                        />
                          <div className="fs-3 mt-2">
                          <i className={`bi bi-star-fill ${Math.round(vote_average)>=2?"estrellas":"estrellaSinPunto"}`} ></i>
                          <i className={`bi bi-star-fill ${Math.round(vote_average)>=4?"estrellas":"estrellaSinPunto"}`} ></i>
                          <i className={`bi bi-star-fill ${Math.round(vote_average)>=6?"estrellas":"estrellaSinPunto"}`} ></i>
                          <i className={`bi bi-star-fill ${Math.round(vote_average)>=8?"estrellas":"estrellaSinPunto"}`} ></i>
                          <i className={`bi bi-star-fill ${Math.round(vote_average)>=10?"estrellas":"estrellaSinPunto"}`} ></i>
            <br/>
            <i class="bi bi-award"></i> {vote_average}
                          </div>
                      </div>
                      <div class="col-md-8 mt-2">
                        <div className="fs-2">Descripción</div>
                        <hr style={{ width: "50%" }} />

                        <p className="fs-5">
                          {overview || "no hay descripción"}{" "}
                        </p>
                        <div className="fs-2 mt-4">
                          <span className="badge genero">Acción</span>
                          <span className="badge genero">Ciencia ficción</span>
                          <span className="badge genero">Thriller</span>
                          <span className="badge genero">Aventura</span>
                          <span className="badge genero">Terror</span>
                          <span className="badge genero">Comedia</span>
                        </div>

                        <div className="mt-4">
                          <button className="btn btn-primary botonTrailer px-5">
                            <i className="bi bi-youtube"></i> Ver trailer
                          </button>
                        </div>
                      </div>

                      <div className="col-md-12 mt-2">
                        <hr />
                        <div className="fs-2 mt-4">
                          <button
                            className="btn btn-primary botonCast px-5"
                            onClick={() => setCastOpen(!castOpen)}
                          >
                            <i className="bi bi-file-person"></i> Cast
                          </button>
                          {castOpen && (
                            <div className="row d-flex justify-content-center animate__animated animate__fadeIn">
                              {cast.map((actor) => {
                                console.log(actor);
                                return (
                                  <div className="col-md-3 divFotoActor">
                                    <img
                                      src={
                                        actor.profile_path
                                          ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                                          : "https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"
                                      }
                                      className="rounded  actorFoto"
                                      alt="No exista la foto"
                                    />
                                    <p>{actor.character}</p>
                                    <p>{actor.original_name} </p>
                                  </div>
                                );
                              })}
                            </div>
                          )}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-md-12">
          <div className="spinner text-center ">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
