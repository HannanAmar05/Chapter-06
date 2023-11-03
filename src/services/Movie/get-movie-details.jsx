import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";


const fetchDataMovieDetails = async ({queryKey}) => {
    const [_key, _params] = queryKey
    const {data} = await http.get(_key,{params : _params})

    return data.results
}

const reduxDetail = async (movieId) => {
    return await http.get(API_ENDPOINT.DETAIL_MOVIE(movieId))
}

const useDataDetailMovie = (options) => {

    const {id} = useParams()

    return useQuery([`${API_ENDPOINT.DETAIL_MOVIE}/${id}`])
}

export {fetchDataMovieDetails, useDataDetailMovie, reduxDetail}

