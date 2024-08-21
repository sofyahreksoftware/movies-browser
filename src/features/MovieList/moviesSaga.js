import { takeEvery, delay, put, call, takeLatest } from "redux-saga/effects";

import { getMovieList } from "./getMovieListFromApi";
import { getGenres } from "./getGenres";
import { getSearchData } from "../../common/api/getSearchData";
import { fetch, fetchSuccess, fetchError, fetchSearch } from "./movieListSlice";

function* fetchMovieListHandler({ payload: page }) {
  try {
    yield delay(1000);

    const data = yield call(getMovieList, page);
    const genreList = yield call(getGenres);
    
    yield put(fetchSuccess({ data, genreList }));
  } catch (error) {
    yield put(fetchError());
  }
}

function* fetchMovieSearchHandler({ payload: options }) {
  try {
    yield delay(1000);

    const { query, page, type } = options;
    const data = yield call(getSearchData, query, page, type);
    const genreList = yield call(getGenres);

    yield put(fetchSuccess({ data, genreList }));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* moviesSaga() {
  yield takeEvery(fetch.type, fetchMovieListHandler);
  yield takeLatest(fetchSearch.type, fetchMovieSearchHandler);
}
