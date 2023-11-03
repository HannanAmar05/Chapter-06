import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../Page/MainPage";
import { PopularMovie } from "../Page/PopularMovie";
import { DetailsMovie } from "../Page/DetailsMovie";
import { SearchResult } from "../Page/SearchResult";
import { Register } from "../Auth/Register";
import { Login } from "../Auth/Login";
import TokenProtected from "../redux/protected/Protected";
// import { Search } from '../components/Search'

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <TokenProtected>
                <MainPage />
              </TokenProtected>
            }
          />
          <Route path="/popular_movie" element={<PopularMovie />} />
          <Route path="/details/:id" element={<DetailsMovie />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
