import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const TugasMovie = () => {
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
      dataMovie();
    }, []);
  
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzdiYmQxOTJmY2I4NTMyZjQwYTFiY2RkMGYzNTNiOSIsInN1YiI6IjY1MTQxZDgxMDQ5OWYyMDBmZTk4MzViOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p5ocNCmFZaPtgQABsd3BBGwAZFtfSvh8i26g2YudO6s',
      },
    };
  
    const dataMovie = async () => {
      try {
        const response = await axios.request(options);
        setLoadData(response.data.results);
        console.log(response.data.results)
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <>
      <div className='flex items-center justify-between px-6'>
        <h1>Popular Movie</h1>
        <h5>See All Movie</h5>
      </div>
      <div className='flex overflow-x-auto'>
       {loadData.map((movie) => (
          <div key={movie.id} >
            <img className='w-[400px] h-[200]' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
          </div>
        ))}
      </div>
      </>
    );
  };
