import { takeLatest, put, call } from "redux-saga/effects";

import { convertGenresArrayToObject } from "./convertGenresArrayToObject";
import {
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
} from "./genresSlice";
import { getGenres } from "./getGenres";

function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    const genreList = yield call(convertGenresArrayToObject, genres?.genres);
    // console.log(genreList);
    yield put(fetchGenresSuccess({ genreList }));
  } catch {
    yield put(fetchGenresError());
  }
}

export function* genresSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
