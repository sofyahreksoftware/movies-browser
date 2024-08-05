import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import moviesReducer from "../features/MovieList/moviesSlice";
import peopleReducer from "../features/PeopleList/peopleSlice";
import peopleDetailsReducer from "../features/PeopleDetails/peopleDetailsSlice";
import movieReducer from "../features/MovieDetails/movieSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
    peopleDetails: peopleDetailsReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

