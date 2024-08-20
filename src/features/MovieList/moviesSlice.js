import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    fetchDataStatus: undefined,
  },
  reducers: {
    fetchMovieList: (state) => {
      state.fetchDataStatus = "loading";
    },
    fetchMovieListSuccess: (state, { payload: movieList, genreList }) => {
      state.movies = movieList;
      state.genres = genreList;
      state.fetchDataStatus = "success";
    },
    fetchMovieListError: (state) => {
      state.fetchDataStatus = "error";
    },
    fetchMovieSearch: (state) => {
      state.fetchDataStatus = "loading";
    },
  },
});

export const {
  fetchMovieList,
  fetchMovieListSuccess,
  fetchMovieListError,
  fetchMovieSearch,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMoviesObject = (state) => selectMoviesState(state).movies;
export const selectFetchDataStatus = (state) =>
  selectMoviesState(state).fetchDataStatus;

export const selectMovieList = (state) =>
  selectMoviesObject(state).movieList?.results;
export const selectGenreList = (state) =>
  selectMoviesObject(state).genreList;

export const selectMoviePage = (state) =>
  selectMoviesObject(state).movieList?.total_pages;

export const selectMovieResult = (state) =>
  selectMoviesObject(state).movieList?.total_results;

export default moviesSlice.reducer;
