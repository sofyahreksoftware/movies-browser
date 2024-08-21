import { createListSlice } from "../../common/detailsPages/createListSlice";

const movieListSlice = createListSlice({ name: "movieList" });

export const { fetch, fetchSearch, fetchSuccess, fetchError, clearOnLeave } =
  movieListSlice.actions;

export const selectMoviesState = (state) => state.movieList;

export const selectStatus = (state) => selectMoviesState(state).status;

export const selectGenreList = (state) => selectMoviesState(state).genres;

export const selectMovieList = (state) => selectMoviesState(state).movieList;

export const selectMoviesPage = (state) =>
  selectMovieList(state).movieList?.total_pages;

export const selectResult = (state) =>
  selectMovieList(state).movieList?.total_results;

export default movieListSlice.reducer;
