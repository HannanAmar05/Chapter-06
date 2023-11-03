import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Heroitem } from "../components/Heroitem";
import { useDataNowPlayin } from "../services/Movie/get-movie-nowplaying";
import { useDispatch, useSelector } from "react-redux";
import { GetMovie } from "../redux/actions/Movie/MoviePopular";

export const Hero = () => {
  // const [loadData, setLoadData] = useState([]);
  // const { data: movie } = useDataNowPlayin();
  // const { data: movie } = useDataPopularMovie();

  const dispatch = useDispatch();
  const loadData = useSelector((state) => state.movies.movie);
  console.log(loadData)

  useEffect(() => {
    dispatch(GetMovie());
  }, []);

  SwiperCore.use([Autoplay, Pagination]);

  return (
    <Swiper
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
    >
      {loadData?.map((movie)=> (
        <SwiperSlide key={movie.id}>
          <Heroitem movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
