import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : "",
    email : ""
}

const movieDetailSlicer = createSlice({
    name : "GetUser",
    initialState,
    reducers : {
        stateNameUser : (state, action) => {
            state.name = action.payload
        },

        stateEmailUser : (state, action) => {
            state.email = action.payload
        } 
    }
})

export const {stateNameUser,stateEmailUser} = movieDetailSlicer.actions

export default movieDetailSlicer.reducer