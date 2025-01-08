import { RootState } from "../../common/bothPageTypes/stateTypes";
import { createDetailsSlice } from "../../common/detailsPages/createDetailSlice";

const movieDetailsSlice = createDetailsSlice({ name: "movieDetails" });

export const { fetch, fetchSuccess, fetchError, clearOnLeave } =
  movieDetailsSlice.actions;

export const selectMovieDetailsState = (state: RootState) => state.movieDetails;

export const selectStatus = (state: RootState) =>
  selectMovieDetailsState(state).status;

export const selectMovieDetails = (state: RootState) =>
  selectMovieDetailsState(state).details;

export const selectCredits = (state: RootState) =>
  selectMovieDetailsState(state).credits;

export default movieDetailsSlice.reducer;
