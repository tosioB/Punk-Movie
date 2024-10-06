import { useEffect, useRef, useState } from "react";
import "@/pages/Home/style/UpcomingMovie.scss";
import UpcomingMovieCard from "./UpcomingMovieCard/UpcomingMovieCard";

function UpcomingMovie() {
  const [upcomingMovie1, setUpcomingMovie1] = useState();
  const [upcomingMovie2, setUpcomingMovie2] = useState();
  const apiKey = import.meta.env.VITE_API_KEY;
  const scrollRefLeft = useRef(null);
  const scrollRefRight = useRef(null);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
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

    fetchUpcomingMovies();
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
    }, 20);

    return () => {
      clearInterval(intervalLeft);
      clearInterval(intervalRight);
    };
  }, []);

  // upcomingMovie2가 변경될 때 scrollRefRight 요소의 스크롤 위치를 가장 오른쪽으로 설정
  useEffect(() => {
    if (scrollRefRight.current) {
      scrollRefRight.current.scrollLeft = scrollRefRight.current.scrollWidth;
    }
  }, [upcomingMovie2]);

  return (
    <section className="upcoming-movie">
      <h2 className="main-title">다가오는 영화</h2>

      <div className="movie-list left" ref={scrollRefLeft}>
        {upcomingMovie1?.map((movie) => {
          return <UpcomingMovieCard key={movie.id} movie={movie} />;
        })}
      </div>

      <div className="movie-list right" ref={scrollRefRight}>
        {upcomingMovie2?.map((movie) => {
          return <UpcomingMovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </section>
  );
}

export default UpcomingMovie;
