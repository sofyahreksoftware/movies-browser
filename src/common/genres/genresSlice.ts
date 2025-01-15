import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../bothPageTypes/stateTypes";

export const genresSlice = createSlice({
  name: "genres",
  initialState: { genres: [], status: "initial" },
  reducers: {
    fetchGenres: (state) => {
      state.status = "loading";
    },

    fetchGenresSuccess: (state, action) => {
      state.status = "success";
      state.genres = action.payload.genreList;
    },

    fetchGenresError: (state) => {
      state.status = "error";
      state.genres = [];
    },

    clearOnLeave: (state) => {
      state.status = "initial";
      state.genres = [];
    },
  },
});

export const selectGenresState = (state: RootState) => state.genres;

export const selectGenres = (state: RootState) =>
  selectGenresState(state).genres;

export const {
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
  clearOnLeave,
} = genresSlice.actions;

export default genresSlice.reducer;
