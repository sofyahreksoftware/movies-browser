import { takeEvery, call, put, delay } from "redux-saga/effects";

import { getMovie } from "./getMovie";
import { getCredits } from "./getCredits";
import {
  fetchMovieDataFromApi,
  fetchMovieSuccess,
  fetchMovieError,
} from "./movieSlice";

function* watchFetchMovieHandler(action) {
  try {
    yield delay(1000);
    const { id: movieId } = action.payload;
    const movieData = yield call(getMovie, movieId);
    const creditsData = yield call(getCredits, movieId);
    yield put(fetchMovieSuccess({ movieData, creditsData }));
  } catch (error) {
    yield put(fetchMovieError());
  }
}

export function* watchFetchMovieSaga() {
  yield takeEvery(fetchMovieDataFromApi.type, watchFetchMovieHandler);
}
