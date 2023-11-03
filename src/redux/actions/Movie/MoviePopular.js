import { reduxMovie } from "../../../services/Movie/get-movie-popular";
import { setDataMovie } from "../../reducers/Movie/MoviePopular";

export const GetMovie = () => (dispatch) => {
  reduxMovie().then((result) => {
    dispatch(setDataMovie(result.data.data))
    return result
  }).catch((err) =>{
    
  })
};
