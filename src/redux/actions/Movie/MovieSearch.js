import { reduxSearch } from "../../../services/Movie/get-movie-search";
import { setSearch } from "../../reducers/Movie/MovieSearch";

export const GetMovieSearch = (query) => async (dispatch) => {
    return reduxSearch(query).then((result) => {
        dispatch(setSearch(result.data.data))
        console.log(result)
    }).catch((err) => {
        console.log(err ,"err");
    });
};
