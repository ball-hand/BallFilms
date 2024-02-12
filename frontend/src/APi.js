import axios from 'axios'

const APIKEY = process.env.REACT_APP_APIKEY
const baseUl=  process.env.REACT_APP_BASEURL

export const getMovieList =async()=>{
    const movie= await axios.get(`${baseUl}/movie/popular?api_key=${APIKEY}`)
    return movie.data.results
}

export const searchMovieList =async(q)=>{
    try{

        const search= await axios.get(`${baseUl}/search/movie?query=${q}&api_key=${APIKEY}`)
        return search.data
    }catch(error){
        console.error("Error in searchMovieList:", error);
        throw error;
    }
}

