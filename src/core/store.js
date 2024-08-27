import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieListReducer from "../features/MovieList/movieListSlice";
import peopleReducer from "../features/PeopleList/peopleListSlice";
import personDetailsReducer from "../features/PersonDetails/personDetailsSlice";
import movieDetailsReducer from "../features/MovieDetails/movieDetailsSlice";
import genresReducer from "../common/genres/genresSlice";

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        peopleList: peopleReducer,
        personDetails: personDetailsReducer,
        movieDetails: movieDetailsReducer,
        genres: genresReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
