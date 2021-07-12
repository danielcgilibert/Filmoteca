export const searchMovieAPI = async(name ) => {

    try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY_MB}&language=es&page=1&include_adult=true&query=${name}`
        const resp = await fetch(url);
        const data = await resp.json();
    
        return data;
    
    } catch (error) {
        
    } 
}
