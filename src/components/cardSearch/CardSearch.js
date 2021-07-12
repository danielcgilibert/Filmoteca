import React from 'react'

export const CardSearch = ({film}) => {
    // const { poster_path} = film;

    return (
        <div class="cardSearch mb-3">
  <div class="row g-0">
    
    <div class="col-md-4 imageSearch" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original///v1XE3dtqd9zsEET0EMkxBgXYP6T.jpg)`  }}>
    
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

  
    );
}
