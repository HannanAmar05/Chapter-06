import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

const fetchDataPopularMovie = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });

  return data.results;
};

const reduxMovie = async () => {
  return await http.get(API_ENDPOINT.MOVIE_POPULAR)
}

// const useDataPopularMovie = (options) => {
//   return useQuery([API_ENDPOINT.NOW_POPULAR, options], fetchDataPopularMovie);
// };

export { fetchDataPopularMovie, reduxMovie };
