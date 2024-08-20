import { takeEvery, call, put, delay } from "redux-saga/effects";

import { getMovie } from "./getMovie";
import { getCredits } from "./getCredits";
import { fetch, fetchSuccess, fetchError } from "./movieDetailsSlice";

function* watchFetchMovieHandler(action) {
  try {
    yield delay(1000);
    const { movieId } = action.payload;
    const detailsData = yield call(getMovie, movieId);
    const creditsData = yield call(getCredits, movieId);
    yield put(fetchSuccess({ detailsData, creditsData }));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* movieDetailsSaga() {
  yield takeEvery(fetch.type, watchFetchMovieHandler);
}
