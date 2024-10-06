import { useState, useEffect } from "react";
import baseURL from "@/assets/data/baseURL";
import "@/pages/Home/style/NewPlayingMovie.scss";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function NowPlayingMovie() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState();
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1";
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
        setNowPlayingMovie(data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchNowPlayingMovies();
  }, []);

  return (
    <section className="new-playing-movie">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        slidesPerView={1.5}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        modules={[Navigation]}
        className="movie-swiper "
      >
        {nowPlayingMovie?.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <Link to="/Detail" state={{ movie }} className="movie-box">
                <span className="img-box">
                  <img src={baseURL + movie.backdrop_path} alt={movie.title} />
                </span>
                <div className="txt-box">
                  <p className="title">{movie.title}</p>
                  <p className="average">
                    평점: {movie.vote_average.toFixed(2)}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-prev swiper-nav-btn">Previous</div>
        <div className="swiper-button-next swiper-nav-btn">Next</div>
      </Swiper>
    </section>
  );
}
export default NowPlayingMovie;
