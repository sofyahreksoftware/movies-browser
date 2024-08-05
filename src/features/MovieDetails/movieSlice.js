import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movie: null, credits: null, fetchMovieStatus: undefined },
  reducers: {
    fetchMovieDataFromApi: (state) => {
      state.fetchMovieStatus = "loading";
    },

    fetchMovieSuccess: (state, action) => {
      const { movieData, creditsData } = action.payload;
      state.movie = movieData;
      state.credits = creditsData;
      state.fetchMovieStatus = "success";
    },

    fetchMovieError: (state) => {
      state.movie = null;
      state.fetchMovieStatus = "error";
    },
  },
});

export const { fetchMovieDataFromApi, fetchMovieSuccess, fetchMovieError } =
  movieSlice.actions;

export const selectMovieState = (state) => state.movie;

export const selectMovie = (state) => selectMovieState(state).movie;

export const selectCredits = (state) => selectMovieState(state).credits;

export const selectFetchMovieStatus = (state) =>
  selectMovieState(state).fetchMovieStatus;

export default movieSlice.reducer;
