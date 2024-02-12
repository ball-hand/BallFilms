import "./App.css";
import { getMovieList, searchMovieList } from "./APi";
import { useEffect, useState } from "react";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="Movie-date">release : {movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if(q.length>3){
      const find = await searchMovieList(q);
      console.log({find :find})
      setPopularMovies(find.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>SEARCH FILMS </h1>
        <input
          placeholder="cari movie kesayangan...."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
