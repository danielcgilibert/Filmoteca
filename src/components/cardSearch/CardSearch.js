import React from "react";

export const CardSearch = ({ movieSearch }) => {
  console.log(movieSearch);
  const { title, poster_path, vote_average, overview } = movieSearch;

  return (
    <div class="cardSearch mb-3">
      <div class="row g-0">
        <div
          class="col-md-4 imageSearch"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original//${poster_path})`,
          }}
        ></div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"><strong> {title} </strong></h5>
            <p class="card-text">{overview} </p>
            <p class="card-text">
              <small class="badge bg-primary text-wrap px-4 align-center fs-5">
                <i class="bi bi-award mr-2"></i>
                {vote_average}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
