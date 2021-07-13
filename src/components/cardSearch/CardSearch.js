import React from "react";

export const CardSearch = ({ movieSearch }) => {
  console.log(movieSearch);
  const { title, poster_path, vote_average, overview } = movieSearch;

  return (
    <div className="cardSearch mb-3">
      <div className="row g-0">
        <div
          className="col-md-4 imageSearch"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original//${poster_path})`,
          }}
        ></div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"><strong> {title} </strong></h5>
            <p className="card-text">{overview} </p>
            <p className="card-text">
              <small className="badge bg-primary text-wrap px-4 align-center fs-5">
                <i className="bi bi-award mr-2"></i>
                {vote_average}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
