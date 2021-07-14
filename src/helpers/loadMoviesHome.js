export const loadMovies = async(page=1 ) => {

       try {
           const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY_MB}&language=es&page=${page}`
           const resp = await fetch(url);
           const data = await resp.json();
       
           return data;
       
       } catch (error) {
           
       } 
}
