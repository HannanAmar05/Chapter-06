import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export const Heroitem = ({movie}) => {
    const bg = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
  return (
    <div>
        <Link to={`/details/${movie.id}`}><div className='py-24 sm:py-36 w-full flex items-center gap-4 relative bg-center bg-no-repeat bg-cover h-screen' style={{ backgroundImage : `url(${bg})` }}>
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
            <div className='flex flex-col gap-6 justify-center absolute w-3/4  md:px-24'>
                <h1 className='text-6xl text-white'>{movie.title}</h1>
                <p className='text-base text-white w-3/4'>{movie.overview}</p>
                <Link to='/video'><Button variant="watch">
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
              </Button></Link>
            </div>
        </div>
        </Link>
    </div>
  )
}
