import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: "peopleDetails",
  initialState: {
    details: [],
    movieCredits: [],
    genres: [],
    fetchDataStatus: undefined,
  },
  reducers: {
    fetchPeopleDetails: (state) => {
      state.fetchDataStatus = "loading";
    },
    fetchPeopleDetailsSuccess: (
      state,
      { payload: personDetails, personMovieCredits, genreList }
    ) => {
      state.details = personDetails;
      state.movieCredits = personMovieCredits;
      state.genres = genreList;
      state.fetchDataStatus = "success";
    },
    fetchPeopleDetailsError: (state) => {
      state.fetchDataStatus = "error";
    },
  },
});

export const {
  fetchPeopleDetails,
  fetchPeopleDetailsSuccess,
  fetchPeopleDetailsError,
} = peopleDetailsSlice.actions;

export const selectPeopleDetailsState = (state) => state.personDetails;
export const selectFetchDataStatus = (state) =>
  selectPeopleDetailsState(state).fetchDataStatus;

export const selectPeopleDetailsObject = (state) =>
  selectPeopleDetailsState(state).details;
export const selectPersonDetails = (state) =>
  selectPeopleDetailsObject(state).personDetails;

export const selectPersonMovieCast = (state) =>
  selectPeopleDetailsObject(state).personMovieCredits?.cast;
export const selectPersonMovieCrew = (state) =>
  selectPeopleDetailsObject(state).personMovieCredits?.crew;

export const selectGenreList = (state) =>
  selectPeopleDetailsObject(state).genreList?.genres;

export default peopleDetailsSlice.reducer;
