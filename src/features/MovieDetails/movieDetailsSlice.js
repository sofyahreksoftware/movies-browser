import { createDetailsSlice } from "../../common/detailsPage/detailSlice";

const movieDetailsSlice = createDetailsSlice({ name: "movieDetails" });

export const { fetch, fetchSuccess, fetchError, clearOnLeave } =
  movieDetailsSlice.actions;

export const selectMovieDetailsState = (state) => state.movieDetails;

export const selectStatus = (state) => selectMovieDetailsState(state).status;

export const selectMovieDetails = (state) =>
  selectMovieDetailsState(state).details;

export const selectCredits = (state) => selectMovieDetailsState(state).credits;

export default movieDetailsSlice.reducer;
