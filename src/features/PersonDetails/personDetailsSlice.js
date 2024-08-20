import { createDetailsSlice } from "../../common/detailsPage/detailSlice";

const personDetailsSlice = createDetailsSlice({ name: "personDetails" });

export const { fetch, fetchSuccess, fetchError, clearOnLeave } =
  personDetailsSlice.actions;

export const personDetailsState = (state) => state.personDetails;

export const selectStatus = (state) => personDetailsState(state).status;

export const selectPersonDetails = (state) => personDetailsState(state).details;

export const selectPersonMovieCredits = (state) =>
  personDetailsState(state).credits;

export const selectGenreList = (state) => personDetailsState(state).genres;

export default personDetailsSlice.reducer;
