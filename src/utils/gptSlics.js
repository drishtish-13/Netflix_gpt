import { createSlice } from "@reduxjs/toolkit";

const gptSlics=createSlice({
    name: "gpt"
,
initialState:{
    showGptSearch:false,
    gptMovies:null,
    movieResult:null,
    movieNames:null
},
reducers:{
    toggleGptSearchView: (state,action)=>{
        state.showGptSearch=!state.showGptSearch;
    },
    addGptMovieResult:(state,action)=>{
        const{movieNames, movieResult}=action.payload;
        state.movieNames=movieNames;
        state.movieResult=movieResult;
    },
},
});

export const{toggleGptSearchView,addGptMovieResult}=gptSlics.actions;

export default gptSlics.reducer;