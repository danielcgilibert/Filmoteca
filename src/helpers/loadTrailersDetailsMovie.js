export const trailerMovie = async(id) =>{
    try {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY_MB}&language=en-US`
        const resp = await fetch(url);
        const data = await resp.json();
    
        return data;
    
    } catch (error) {
        
    } 
}