import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetMovieSearch } from "../redux/actions/Movie/MovieSearch";

export const SearchResult = () => {
  const { query } = useParams();
  const [loading, setLoading] = useState("");
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.search.searchData)

  useEffect(() => {
    setLoading(true);
    dispatch(GetMovieSearch(query))
      .then((result) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [dispatch, query]);


  return (
    <>
      <div className=" bg-opacity-60 bg-black bg-gradient-to-t from-black to-transparent">
        <div className="flex items-center justify-center text-white text-2xl py-2">
          <h1>SEARCH RESULT</h1>
        </div>
        <div className="grid grid-cols-5">
          {searchResult.map((movie) => [
            <div className="my-6" key={movie.id}>
              <img
                className="w-11/12 rounded-t-md"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="wowo"
              />
              <div className="bg-white w-11/12 py-4 rounded-b-md flex flex-col px-4 ">
                <div className="flex justify-between">
                  <h2 className="font-bold text-md w-full">{movie.title}</h2>
                  <div className="bg-black h-fit  p-2 rounded-lg flex gap-1 font-bold text-yellow-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="rgb(252 211 77)"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className=" w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <h4
                      className={`${
                        movie.vote_average >= 8
                          ? "text-green-500"
                          : movie.vote_average >= 6
                          ? "text-orange-300"
                          : "text-red-600"
                      }`}
                    >
                      {movie.vote_average.toFixed(1)}
                    </h4>
                  </div>
                </div>
                <h3 className="text-slate-400 text-md">
                  {new Date(movie.release_date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </h3>
                <p>{movie.overview.slice(0, 50)}</p>
                <Link to={`/details/${movie.id}`} className="block mt-2">
                  <button className="bg-slate-500 rounded-lg p-2 w-1/2 text-white text-center">
                    Read More...
                  </button>
                </Link>
              </div>
            </div>,
          ])}
        </div>
      </div>
    </>
  );
};
