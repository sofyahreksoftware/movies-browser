import { takeLatest, put, call } from "redux-saga/effects";

import { convertGenresArrayToObject } from "./convertGenresArrayToObject";
import {
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
} from "./genresSlice";
import { getGenres } from "./getGenres";
import {
  GenreMap,
  Genres,
  GenresFromApi,
} from "../bothPageTypes/moviePersonTypes";

function* fetchGenresHandler() {
  try {
    const genres: GenresFromApi = yield call(getGenres);
    const genreList: GenreMap = yield call(
      convertGenresArrayToObject,
      genres?.genres
    );
    yield put(fetchGenresSuccess({ genreList }));
  } catch {
    yield put(fetchGenresError());
  }
}

export function* genresSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
