import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    MovieDetail : ""
}

const movieDetailSlicer = createSlice({
    name : "MovieDetail",
    initialState,
    reducers : {
        setDetail : (state, action) => {
            state.MovieDetail = action.payload
        }
    }
})

export const {setDetail} = movieDetailSlicer.actions

export default movieDetailSlicer.reducer