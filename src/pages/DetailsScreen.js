import React from "react";
import { NavBar } from "../components/navbar/NavBar";

export const DetailsScreen = () => {
  return (
    <>
      <NavBar />

      <div
        className="container-fluid imagenPortada"
        style={{
          backgroundImage:
            "url(https://image.tmdb.org/t/p/original/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg)",
        }}
      >
        <div className="row d-flex justify-content-center mb-5 ">
          <div className="col-md-12 ">
            <div class="container">
              <div class="row datosPelicula">
                <div class="col-md-12 mt-5 px-5">
                  <h4>2014</h4>
                  <h1>La guerra del mañana</h1>
                  <h5>
                    <i class="bi bi-calendar"></i> 2021-06-30
                  </h5>
                  <br />
                  <hr />
                  <div class="row">
                    <div class="col-md-4 mt-2 text-center ">
                      <img
                        src="https://image.tmdb.org/t/p/original/tzp6VzED2TBc02bkYoYnQa6r2OK.jpg"
                        alt="..."
                        class="img-thumbnail caratula"
                      />
                      <p className="mt-2">
                        <div className="fs-4">
                          <i class="bi bi-star-fill estrellas"></i>
                          <i class="bi bi-star-fill estrellas"></i>
                          <i class="bi bi-star-fill estrellas"></i>
                          <i class="bi bi-star-fill estrellas"></i>
                          <i class="bi bi-star-fill estrellaSinPunto"></i>
                          8.4/10
                        </div>
                      </p>
                    </div>
                    <div class="col-md-8 mt-2">
                      <div className="fs-2">Descripción</div>
                      <hr style={{ width: "50%" }} />

                      <p className="fs-5">
                        Un día el mundo se paraliza cuando un grupo de viajeros
                        en el tiempo se transporta desde el año 2051 para
                        entregar un mensaje urgente: La humanidad está perdiendo
                        la guerra mundial contra una especie alienígena letal.
                        La única esperanza de supervivencia es que los soldados
                        y los ciudadanos del presente sean transportados al
                        futuro y se unan a la lucha. Entre los reclutados está
                        el profesor de instituto y padre de familia Dan Forester
                        (Chris Pratt) quien, decidido a salvar el mundo por su
                        hija, se une a una brillante científica (Yvonne
                        Strahovski) y a su padre (J.K. Simmons) en una búsqueda
                        desesperada por reescribir el destino del planeta.,
                      </p>
                      <div className="fs-2 mt-4">
                        <span class="badge genero">Acción</span>
                        <span class="badge genero">Ciencia ficción</span>
                        <span class="badge genero">Thriller</span>
                        <span class="badge genero">Aventura</span>

                        <span class="badge genero">Terror</span>
                        <span class="badge genero">Comedia</span>
                      </div>

                      <div className="mt-4">
                        <button className="btn btn-primary botonTrailer px-5">
                          <i class="bi bi-youtube"></i> Ver trailer
                        </button>
                      </div>
                    </div>

                    <div class="col-md-12 mt-2">
                      <hr />
                      <div className="fs-2 mt-4">
                      <i class="bi bi-file-person"></i> Cast
                        <div className="d-flex justify-content-center">
                          <div className="divFotoActor">
                            <img
                              src="https://image.tmdb.org/t/p/original/gXKyT1YU5RWWPaE1je3ht58eUZr.jpg"
                              class="rounded  actorFoto"
                              alt="..."
                            />
                            <p>Crist </p>
                          </div>

                          <div className="divFotoActor">
                            <img
                              src="https://image.tmdb.org/t/p/original/wio1VaQDOggDfPOTJf2vxGfooxZ.jpg"
                              class="rounded  actorFoto"
                              alt="..."
                            />
                            <p>Marta </p>
                          </div>

                          <div className="divFotoActor">
                            <img
                              src="https://image.tmdb.org/t/p/original/7kIiPojgSVNRXb5z0hiijcD5LJ6.jpg"
                              class="rounded  actorFoto"
                              alt="..."
                            />
                            <p>Maria </p>
                          </div>

                          <div className="divFotoActor">
                            <img
                              src="https://image.tmdb.org/t/p/original/hBOviIHCVqbWyyPUoIxZohDl5SL.jpg"
                              class="rounded  actorFoto"
                              alt="..."
                            />
                            <p>Jorge</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
