import React from 'react'
import { Header } from '../partials/Header'
import { Hero } from '../partials/Hero'
import { MovieCard } from '../partials/MovieCard'

export const MainPage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <MovieCard/>
    </div>
  )
}
