import {all} from "redux-saga/effects";
import {moviesSaga} from "../features/MovieList/moviesSaga";
import {peopleSaga} from "../features/PeopleList/peopleSaga";
import {personDetailsSaga} from "../features/PersonDetails/personDetailsSaga";
import {movieDetailsSaga} from "../features/MovieDetails/movieDetailsSaga";
import {genresSaga} from "../common/bothPageTypes/genres/genresSaga"

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
        personDetailsSaga(),
        movieDetailsSaga(),
        genresSaga(),
    ]);
}
