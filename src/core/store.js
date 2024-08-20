import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import moviesReducer from "../features/MovieList/moviesSlice";
import peopleReducer from "../features/PeopleList/peopleSlice";
import personDetailsReducer from "../features/PersonDetails/personDetailsSlice";
import movieDetailsReducer from "../features/MovieDetails/movieDetailsSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
    personDetails: personDetailsReducer,
    movieDetails: movieDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
