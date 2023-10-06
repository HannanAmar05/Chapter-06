import { useQuery } from "@tanstack/react-query";
import http from '../utils/http'
import { API_ENDPOINT } from "../utils/api-endpoint";

const fectDataMovie = async ({ queryKey }) => {
    // const {data} = await http.get(`${API_ENDPOINT.NOW_PLAYING}page=${page ? page :1}`)
    const [_key, _params] = queryKey
    const {data} = await http.get(_key,_params)
    return data
}

const useMovieDataQuery = (options) => {
    // return useQuery(["useData",page], () => fectDataMovie(page))

    return useQuery([API_ENDPOINT.NOW_PLAYING, options], fectDataMovie)
};

export {fectDataMovie, useMovieDataQuery}