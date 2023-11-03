import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchData : []
}

const movieSearchSlicer = createSlice({
    name : "MovieSearch",
    initialState,
    reducers : {
        setSearch : (state,action) =>{
            state.searchData = action.payload
        } 
    }
})

export const {setSearch} = movieSearchSlicer.actions

export default movieSearchSlicer.reducer