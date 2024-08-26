import {createSlice} from "@reduxjs/toolkit";

export const genresSlice = createSlice({
    name: "genresSlice",
    initialState: {genres: null, status: "initial"},
    reducers: {
        fetchGenres: (state) => {
            state.status = "loading";
        },

        fetchGenresSuccess: (state, action) => {
            state.status = "success";
            state.genres = action.payload;
        },

        fetchGenresError: (state) => {
            state.status = "error";
            state.genres = null;
        },

        clearOnLeave: (state) => {
            state.status = "initial";
            state.genres = null;
        },
    },
});

export const selectGenresState = (state) => state.genres;

export const selectGenres = (state) => selectGenresState(state).genres;

export const {fetchGenres, fetchGenresSuccess, fetchGenresError, clearOnLeave} =
    genresSlice.actions;

export default genresSlice.reducer;

