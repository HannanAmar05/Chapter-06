import { reduxUser } from "../../../services/auth/get_user";
import { stateNameUser } from "../../reducers/Auth/GetUser";

export const GetUserRedux = () => async (dispatch) =>{
    return reduxUser().then((result) => {
        dispatch(stateNameUser(result.data.data))
        // return result
    }).catch((err) => {
        console.log(err ,"err");
    });
} 