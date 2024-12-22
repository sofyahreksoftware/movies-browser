import { createSlice } from "@reduxjs/toolkit";

export const createDetailsSlice = ({ name }: { name: string }) => {
  const slice = createSlice({
    name,
    initialState: {
      status: "initial",
      details: [],
      credits: [],
    },
    reducers: {
      fetch: (state) => {
        state.status = "loading";
      },

      fetchSuccess: (state, action) => {
        state.status = "success";
        state.details = action.payload.detailsData;
        state.credits = action.payload.creditsData;
      },

      fetchError: (state) => {
        state.status = "error";
        state.details = [];
      },

      clearOnLeave: (state) => {
        state.status = "initial";
        state.details = [];
        state.credits = [];
      },
    },
  });

  return slice;
};
