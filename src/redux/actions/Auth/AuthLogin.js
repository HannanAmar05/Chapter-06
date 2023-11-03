import { reduxLogin } from "../../../services/auth/login_user";
import { CookiesStorage,CookiesKey } from "../../../utils/cookies";
import { setIsLoggedIn,setToken } from "../../reducers/Auth/AuthLogin";
export const LoginUser2 = (input) => async (dispatch) => {
  try {
  const auth = await reduxLogin(input)
  CookiesStorage.set(CookiesKey.AuthToken, auth.data.data.token)
  dispatch(setToken(auth.data.data.token))
  dispatch(setIsLoggedIn(true))
  return true

  } catch (error) {
    return false
  }
}

export const logout = () => (dispatch) => {
  dispatch(setToken(undefined))
  CookiesStorage.remove(CookiesKey.AuthToken)
}
