import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { GetMovie } from '../redux/actions/Movie/MoviePopular'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useDataPopularMovie } from "../services/Movie/get-movie-popular";

export const MovieCard = () => {
  // const [loadData, setLoadData] = useState([]);
  const loadData = useSelector((state) => state.movies.movie);
  console.log(loadData, "DATA MOVIE")
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(GetMovie());
  }, []);
  // const { data: movie } = useDataPopularMovie();

  return (
    <>
      <div className="flex items-center justify-between px-6 my-8 ">
        <h1 className="text-xl font-bold">Popular Movie</h1>
        <Link to="/popular_movie">
          <h5 className="flex font-bold gap-2 text-red-500 text-lg">
            See All Movie
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </h5>
        </Link>
      </div>
      <Swiper
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {loadData?.map((movie)=> (
          <SwiperSlide key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img
                className="rounded-xl mb-4"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
