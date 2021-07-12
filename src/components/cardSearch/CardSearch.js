import React from 'react'

export const CardSearch = ({movieSearch}) => {
  console.log(movieSearch);
    const { title,poster_path,vote_average,overview} = movieSearch;

    return (
        <div class="cardSearch mb-3">
  <div class="row g-0">
    
    <div class="col-md-4 imageSearch" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original//${poster_path})`  }}>
    
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{overview} </p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

  
    );
}
