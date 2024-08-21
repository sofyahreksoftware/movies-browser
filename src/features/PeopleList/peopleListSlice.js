import { createListSlice } from "../../common/detailsPages/createListSlice";

const peopleListSlice = createListSlice({ name: "peopleList" });

export const { fetch, fetchSearch, fetchSuccess, fetchError, clearOnLeave } =
  peopleListSlice.actions;

export const selectPeopleState = (state) => state.peopleList;

export const selectStatus = (state) =>selectPeopleState(state).status;

export const selectGenreList = (state) =>selectPeopleState(state).genres;

export const selectPeopleList = (state) =>selectPeopleState(state).peopleList;

export const selectPeoplePage = (state) =>
  selectPeopleList(state).peopleList?.total_pages;

export const selectResult = (state) =>
  selectPeopleList(state).peopleList?.total_results;

export default peopleListSlice.reducer;


























// import { createSlice } from "@reduxjs/toolkit";

// const peopleSlice = createSlice({
//   name: "people",
//   initialState: {
//     people: [],
//     fetchDataStatus: undefined,
//   },
//   reducers: {
//     fetchPeopleList: (state) => {
//       state.fetchDataStatus = "loading";
//     },
//     fetchPeopleListSuccess: (state, { payload: peopleList }) => {
//       state.people = peopleList;
//       state.fetchDataStatus = "success";
//     },
//     fetchPeopleListError: (state) => {
//       state.fetchDataStatus = "error";
//     },
//     fetchPeopleSearch: (state) => {
//       state.fetchDataStatus = "loading";
//     },
//   },
// });

// export const {
//   fetchPeopleList,
//   fetchPeopleListSuccess,
//   fetchPeopleListError,
//   fetchPeopleSearch,
// } = peopleSlice.actions;

// export const selectPeopleState = (state) => state.people;
// export const selectPeopleObject = (state) => selectPeopleState(state).people;
// export const selectFetchDataStatus = (state) =>
//   selectPeopleState(state).fetchDataStatus;

// export const selectPeopleList = (state) => selectPeopleObject(state).results;
// export const selectPeoplePage = (state) =>
//   selectPeopleState(state).people.total_pages;

// export const selectPeopleResult = (state) =>
//   selectPeopleState(state).people.total_results;

// export default peopleSlice.reducer;
