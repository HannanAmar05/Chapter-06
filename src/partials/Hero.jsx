import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper' 
import {Autoplay, Pagination} from 'swiper/modules'
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Heroitem } from '../components/Heroitem';

export const Hero = () => {
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    dataMovie();
  }, []);

  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_SERVER}3/movie/now_playing?language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization:
        `Bearer ${process.env.REACT_APP_KEY} `,
    },
  };

  const dataMovie = async () => {
    try {
      const response = await axios.request(options);
      setLoadData(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  SwiperCore.use([Autoplay, Pagination]);

  return (
    <Swiper
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
    >
      {loadData.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Heroitem movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
