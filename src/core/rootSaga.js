import { all } from "redux-saga/effects";
import { moviesSaga } from "../features/MovieList/moviesSaga";
import { peopleSaga } from "../features/PeopleList/peopleSaga";
import { peopleDetailsSaga } from "../features/PeopleDetails/peopleDetailsSaga";
import { watchFetchMovieSaga } from "../features/MovieDetails/movieSaga";

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    peopleSaga(),
    peopleDetailsSaga(),
    watchFetchMovieSaga(),
  ]);
}
