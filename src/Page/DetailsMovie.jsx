import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../partials/Header";
import axios from "axios";
import Button from "../components/Button";


export const DetailsMovie = () => {
  const [Details, setDetails] = useState("");

  const { id } = useParams();

  useEffect(() => {
    dataMovie();
  });

  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_SERVER}3/movie/${id}?language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_KEY} `,
    },
  };


  const dataMovie = async () => {
    try {
      const response = await axios.request(options);
      setDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const bg = `https://image.tmdb.org/t/p/original/${Details.backdrop_path}`;

  const num = Details && Details.vote_average.toFixed(1);

  return (
    <>
      <Header/>
      <div
        className="relative bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
        <div className="z-50 flex flex-col items-start justify-center h-screen relative">
          <div className="mx-20 flex flex-col items-start justify-center gap-6 relative">
            <h1 className="text-5xl text-white uppercase font-bold">
              {Details.title}
            </h1>
            <h4 className="">
              {Details && Details.genres
                ? Details.genres.map((genre) => (
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
            <p className="text-white">{Details ? Details.overview : ""}</p>
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
};
