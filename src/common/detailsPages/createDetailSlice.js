import { createSlice } from "@reduxjs/toolkit";

export const createDetailsSlice = ({ name }) => {
  const slice = createSlice({
    name,
    initialState: { status: "initial", details: [], credits: [], genres: [] },
    reducers: {
      fetch: (state) => {
        state.status = "loading";
      },

      fetchSuccess: (state, action) => {
        state.status = "success";
        state.details = action.payload.detailsData;
        state.credits = action.payload.creditsData;
        state.genres = action.payload.genreList;
      },

      fetchError: (state) => {
        state.status = "error";
        state.details = null;
      },

      clearOnLeave: (state) => {
        state.status = "initial";
        state.details = [];
        state.credits = [];
        state.genres = [];
      },
    },
  });

  return slice;
};
