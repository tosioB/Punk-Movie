import { useLocation } from "react-router-dom";
import baseURL from "../../assets/data/baseURL";
import "./style/Detail.scss";
import { genreData } from "../../assets/data/genreData";

function Detail() {
  const location = useLocation();
  console.log(location);
  const movie = location.state.movie;

  const genreName = genreData.filter((genre) =>
    movie.genre_ids.includes(genre.id)
  );

  return (
    <div className="detail-page">
      <img className="back-img" src={baseURL + movie.backdrop_path} />
      <div className="container">
        <div className="txt-box">
          <h2 className="title">{movie.title}</h2>
          <ul className="movie-add-info">
            <li>{movie.release_date}</li>
            <li>{movie.vote_average.toFixed(2)}</li>
            <li>{movie.original_language.toUpperCase()}</li>
          </ul>
          <ul className="genre-list">
            {genreName.map((genre, index) => {
              return <li key={index}>{genre.name}</li>;
            })}
          </ul>
          <p className="overview">{movie.overview}</p>
        </div>
        <span className="img-box">
          <img src={baseURL + movie.poster_path} />
        </span>
      </div>
    </div>
  );
}

export default Detail;
