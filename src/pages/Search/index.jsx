import { useEffect, useState } from "react";
import baseURL from "@/assets/data/baseURL";
import "./style/Search.scss";
import NoImage from "@/components/NoImage/NoImage";
import { Link } from "react-router-dom";

function Search() {
  const [searchMovie, setSearchMovie] = useState();
  console.log(searchMovie);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/search/movie?language=ko&query=di";
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        }
      };

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setSearchMovie(data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchNowPlayingMovies();
  }, []);

  return (
    <div className="search-page">
      <h2 className="main-title">"ㅇㅇㅇ" 검색결과</h2>
      <div className="movie-list">
        {searchMovie?.map((movie) => {
          return (
            <Link
              key={movie.id}
              to="/Detail"
              state={{ movie }}
              className="movie-box"
            >
              <span className="img-box">
                {movie.backdrop_path ? (
                  <img src={baseURL + movie.backdrop_path} alt={movie.title} />
                ) : (
                  <NoImage />
                )}
              </span>
              <div className="txt-box">
                <p className="title">{movie.title}</p>
                <p className="average">평점: {movie.vote_average.toFixed(2)}</p>
                <p className="overview">{movie.overview}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
