import { createListSlice } from "../../common/listPages/createListSlice";

const peopleListSlice = createListSlice({ name: "peopleList" });

export const { fetch, fetchSearch, fetchSuccess, fetchError, clearOnLeave } =
  peopleListSlice.actions;

export const selectPeopleState = (state) => state.peopleList;

export const selectStatus = (state) => selectPeopleState(state).status;

export const selectGenreList = (state) => selectPeopleState(state).genres;

export const selectPeopleList = (state) => selectPeopleState(state).peopleList;

export const selectPeoplePage = (state) => selectPeopleList(state).total_pages;

export const selectResult = (state) => selectPeopleList(state).total_results;

export default peopleListSlice.reducer;
