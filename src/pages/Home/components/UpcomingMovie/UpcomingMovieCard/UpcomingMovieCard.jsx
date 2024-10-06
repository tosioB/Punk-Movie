import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import baseURL from "@/assets/data/baseURL";
import NoImage from "@/components/NoImage/NoImage";

UpcomingMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired
  }).isRequired
};

function UpcomingMovieCard({ movie }) {
  return (
    <Link to="/Detail" state={{ movie }} className="movie-box">
      <span className={movie.backdrop_path ? "img-box" : "img-box no-img"}>
        {movie.backdrop_path ? (
          <img src={baseURL + movie.backdrop_path} alt={movie.title} />
        ) : (
          <NoImage />
        )}
      </span>
      <div className="txt-box">
        <p className="title">{movie.title}</p>
        <p className="text">Upcoming Films</p>
      </div>
    </Link>
  );
}

export default UpcomingMovieCard;
