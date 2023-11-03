import { combineReducers } from "@reduxjs/toolkit";
import AuthLogin from "./Auth/AuthLogin";
import MovieDetail from "./Movie/MovieDetail";
import MoviePopular from "./Movie/MoviePopular";
import MovieSearch from "./Movie/MovieSearch";
import GetUser from "./Auth/GetUser";

export default combineReducers({
    auth: AuthLogin,
    movies: MoviePopular,
    detail: MovieDetail,
    search : MovieSearch,
    user : GetUser
  });