import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { MainPage } from '../Page/MainPage'
import { PopularMovie } from '../Page/PopularMovie'
import { DetailsMovie } from '../Page/DetailsMovie'
import { SearchResult } from '../Page/SearchResult'
// import { Search } from '../components/Search'

export const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route index element={<MainPage/>}/>
            {/* <Route exact path="/" component={<Search/>} /> */}
            <Route path='/popular_movie' element={<PopularMovie/>}/>
            <Route path='/details/:id' element={<DetailsMovie/>}/>
            <Route path='/search/:query' element={<SearchResult/>}/>
            <Route path='/video/:movie_id'/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
