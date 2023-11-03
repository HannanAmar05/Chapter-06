import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'
import { useDispatch, useSelector } from 'react-redux'
import { setDetail } from '../redux/reducers/Movie/MovieDetail'
import { Header } from '../partials/Header'
import Button from './Button'

export const Details = () => {
    const DetailMovie = useSelector((state) => state.detail.MovieDetail)
    const param = useParams()
    const dispatch = useDispatch()
    const GetDetailAPI = async() => {
        const Data = await http.get(API_ENDPOINT.MOVIE_DETAILS(param.id)? API_ENDPOINT.MOVIE_DETAILS(param.id) : "" )
        console.log(Data, "DATAAA")
        dispatch(setDetail(Data.data.data))
    }
    useEffect(() => {
        GetDetailAPI()
    }, [])
  const bg = `https://image.tmdb.org/t/p/original/${DetailMovie?.backdrop_path}`
  const num = Details && typeof Details.vote_average === 'number' ? Details.vote_average.toFixed(1) : null;
    
  return (
    <>
      <div key={DetailMovie?.id}
        className="relative bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
        <div className="z-50 flex flex-col items-start justify-center h-screen relative">
          <div className="mx-20 flex flex-col items-start justify-center gap-6 relative">
            <h1 className="text-5xl text-white uppercase font-bold">
              {DetailMovie?.title}
            </h1>
            <h4 className="">
              {DetailMovie && DetailMovie.genres
                ? DetailMovie.genres.map((genre) => (
                    <span
                      className="mx-1 bg-slate-300 bg-opacity-50  op py-2 px-3 rounded-full text-white"
                      id={genre.id}
                      key={genre.id}
                    >
                      {genre.name}
                    </span>
                  ))
                : ""}
            </h4>
            <p className="text-white">{DetailMovie ? DetailMovie.overview : ""}</p>
            {num !== null && (
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(252 211 77)"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-yellow-400 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <h4 className="text-white">{num}</h4>
            </div>
            )}
            <Button variant="watch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </>
  );

}
