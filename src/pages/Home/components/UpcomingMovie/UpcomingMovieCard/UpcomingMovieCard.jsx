import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import baseURL from "@/assets/data/baseURL";

UpcomingMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired
  }).isRequired
};

function UpcomingMovieCard({ movie }) {
  return (
    <Link to="/Detail" state={{ movie }} className="movie-box">
      <span className="img-box">
        <img src={baseURL + movie.backdrop_path} alt={movie.title} />
      </span>
      <div className="txt-box">
        <p className="title">{movie.title}</p>
        <p className="text">Upcoming Films</p>
      </div>
    </Link>
  );
}

export default UpcomingMovieCard;
