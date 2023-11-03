import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

const fetchDataNowPlaying = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });

  return data.results;
};

const useDataNowPlayin = (options) => {
  return useQuery([API_ENDPOINT.NOW_PLAYING, options], fetchDataNowPlaying);
};

export { fetchDataNowPlaying, useDataNowPlayin };
