import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    movie : []
}

const nowPlayingSlicer = createSlice({
  name : "MoviePopular",
  initialState,
  reducers : {
    setDataMovie : (state, action) => {
        state.movie = action.payload
    }
  }  
})

export const {setDataMovie} = nowPlayingSlicer.actions

export default nowPlayingSlicer.reducer