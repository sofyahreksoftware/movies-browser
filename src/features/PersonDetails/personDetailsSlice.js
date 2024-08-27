import { createDetailsSlice } from "../../common/detailsPages/createDetailSlice";

const personDetailsSlice = createDetailsSlice({ name: "personDetails" });

export const { fetch, fetchSuccess, fetchError, clearOnLeave } =
  personDetailsSlice.actions;

export const selectPersonDetailsState = (state) => state.personDetails;

export const selectStatus = (state) => selectPersonDetailsState(state).status;

export const selectPersonDetails = (state) => selectPersonDetailsState(state).details;

export const selectPersonMovieCredits = (state) =>
  selectPersonDetailsState(state).credits;

export default personDetailsSlice.reducer;
