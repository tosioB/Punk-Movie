import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import "./style/PopularMovie.scss";
import baseURL from "../../assets/data/baseURL";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const apiKey = import.meta.env.VITE_API_KEY;

const fetchPopularMovies = async (page) => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=ko&page=${page}`;
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

    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

const useGetPopularMovies = () => {
  return useInfiniteQuery({
    queryKey: ["pouplar-movie"],
    queryFn: ({ pageParam }) => {
      return fetchPopularMovies(pageParam);
    },
    getNextPageParam: (last) => {
      if (last.page < last.total_pages) {
        return last.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1
  });
};

function Popular() {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGetPopularMovies();

  const { ref, inView } = useInView();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      setLoading(true);
      const timeout = setTimeout(() => {
        fetchNextPage();
        setLoading(false);
      }, 1000);

      // cleanup function
      return () => {
        clearTimeout(timeout);
        setLoading(false);
      };
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  return (
    <section className="main-sec popular-movie">
      <h2 className="main-title">지금 뜨는 영화들</h2>

      <div className="movie-list">
        {data?.pages.map((page) => {
          return page.results.map((movie) => {
            return (
              <Link key={movie.id} to="/Detail" state={{ movie }}>
                <div className="movie-box">
                  <span className="img-box">
                    <img src={baseURL + movie.poster_path} alt={movie.title} />
                  </span>
                  <div className="txt-box">
                    <p className="title">{movie.title}</p>
                  </div>
                </div>
              </Link>
            );
          });
        })}
      </div>
      <div ref={ref} className="infinite-scroll">
        무한스크롤 발동!
      </div>
      {loading && <LoadingSpinner />}
    </section>
  );
}

export default Popular;
