import { useEffect, useRef, useState } from "react";
import "./upcoming.scss";
import baseURL from "../../assets/data/data";
import { Link } from "react-router-dom";

function Upcoming() {
  const [upcomingMovie1, setUpcomingMovie1] = useState();
  const [upcomingMovie2, setUpcomingMovie2] = useState();
  const apiKey = import.meta.env.VITE_API_KEY;
  const scrollRefLeft = useRef(null);
  const scrollRefRight = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const urls = [
        "https://api.themoviedb.org/3/movie/upcoming?language=ko&page=3",
        "https://api.themoviedb.org/3/movie/upcoming?language=ko&page=4"
      ];
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        }
      };

      try {
        const responses = await Promise.all(
          urls.map((url) => fetch(url, options))
        );

        // 모든 응답이 성공적인지 확인
        responses.forEach((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        });

        // JSON 데이터 추출
        const data = await Promise.all(
          responses.map((response) => response.json())
        );
        setUpcomingMovie1(data[0].results); // 페이지 1 데이터 저장
        setUpcomingMovie2(data[1].results); // 페이지 2 데이터 저장
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervalLeft = setInterval(() => {
      if (scrollRefLeft.current) {
        scrollRefLeft.current.scrollBy({
          left: 1,
          behavior: "smooth"
        });
      }
    }, 20);

    const intervalRight = setInterval(() => {
      if (scrollRefRight.current) {
        scrollRefRight.current.scrollBy({
          left: -1,
          behavior: "smooth"
        });
      }
    }, 1);

    return () => {
      clearInterval(intervalLeft);
      clearInterval(intervalRight);
    };
  }, []);

  useEffect(() => {
    if (scrollRefRight.current) {
      scrollRefRight.current.scrollLeft = scrollRefRight.current.scrollWidth;
    }
  }, [upcomingMovie2]);

  return (
    <div className="upcoming main-sec">
      <h2 className="main-title">개봉예정</h2>

      <div className="movie-list left" ref={scrollRefLeft}>
        {upcomingMovie1?.map((movie) => {
          return (
            <Link
              key={movie.id}
              to="/Detail"
              state={{ movie }}
              className="movie-box"
            >
              <span className="img-box">
                <img src={baseURL + movie.backdrop_path} alt={movie.title} />
              </span>
              <div className="txt-box">
                <p className="title">{movie.title}</p>
                <p className="text">Upcoming</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="movie-list right" ref={scrollRefRight}>
        {upcomingMovie2?.map((movie) => {
          return (
            <Link
              key={movie.id}
              to="/Detail"
              state={{ movie }}
              className="movie-box"
            >
              <span className="img-box">
                <img src={baseURL + movie.backdrop_path} alt={movie.title} />
              </span>
              <div className="txt-box">
                <p className="title">{movie.title}</p>
                <p className="text">Upcoming</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Upcoming;
