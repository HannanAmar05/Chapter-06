import { reduxUser } from "../../../services/auth/get_user";
import { stateDataUser } from "../../reducers/Auth/GetUser";

export const GetUserRedux = () => async (dispatch) =>{
    return reduxUser().then((result) => {
        dispatch(stateDataUser(result.data.data))
        // return result
    }).catch((err) => {
        console.log(err ,"err");
    });
} 