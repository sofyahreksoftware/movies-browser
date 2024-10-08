import {createSlice} from "@reduxjs/toolkit";

export const createListSlice = ({name}) => {
    const slice = createSlice({
        name,
        initialState: {status: "initial", [name]: [],},
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
            },
            fetchError: (state) => {
                state.status = "error";
            },
            clearOnLeave: (state) => {
                state.status = "initial";
                state[name] = [];
            },
        },
    });

    return slice;
};
