import { takeLatest, put, call } from "redux-saga/effects";

import {
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
} from "./genresSlice";
import { getGenres } from "./getGenres";

function* fetchGenresHandler() {
  try {
    const genreList = yield call(getGenres);
    yield put(fetchGenresSuccess({ genreList }));
  } catch {
    yield put(fetchGenresError());
  }
}

export function* genresSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
