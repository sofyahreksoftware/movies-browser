import { createSlice } from "@reduxjs/toolkit";

export const genresSlice = createSlice({
  name: "genresSlice",
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

export const selectGenresState = (state) => state.genres;

export const selectGenres = (state) => selectGenresState(state).genres;

export const {
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
  clearOnLeave,
} = genresSlice.actions;

export default genresSlice.reducer;
