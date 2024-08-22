import { createSlice } from "@reduxjs/toolkit";

export const createListSlice = ({ name }) => {
  const slice = createSlice({
    name,
    initialState: { status: "initial", [name]: [], genres: [] },
    reducers: {
      fetch: (state) => {
        state.status = "loading";
      },
      fetchSearch: (state) => {
        state.status = "loading";
      },
      fetchSuccess: (state, action) => {
        state.status = "success";
        state[name] = action.payload.data;
        state.genres = action.payload.genreList;
      },
      fetchError: (state) => {
        state.status = "error";
      },
      clearOnLeave: (state) => {
        state.status = "initial";
        state[name] = [];
        state.genres = [];
      },
    },
  });

  return slice;
};
