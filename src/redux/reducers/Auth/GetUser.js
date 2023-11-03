import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Datauser : "" ,
}

const movieDetailSlicer = createSlice({
    name : "GetUser",
    initialState,
    reducers : {
        stateDataUser : (state, action) => {
            state.Datauser = action.payload
        }
    }
})

export const {stateDataUser} = movieDetailSlicer.actions

export default movieDetailSlicer.reducer