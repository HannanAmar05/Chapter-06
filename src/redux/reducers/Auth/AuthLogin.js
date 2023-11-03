import { createSlice } from "@reduxjs/toolkit";
import { CookiesKey, CookiesStorage } from "../../../utils/cookies";

const initialState = {
    token : CookiesStorage.set(CookiesKey.AuthToken) || undefined,
    isLogin : "",
    user : ""
}

const authLoginSlice = createSlice({
    name : "loginAuth",
    initialState,
    reducers : {
        setToken : (state,action) => {
            state.token = action.payload
        },
        setIsLoggedIn : (state,action) => {
            state.isLogin = action.payload
        },
        setUser : (state,action) => {
            state.user = action.payload
        }
    }
})

export const {setToken, setIsLoggedIn, setUser} = authLoginSlice.actions

export default authLoginSlice.reducer;