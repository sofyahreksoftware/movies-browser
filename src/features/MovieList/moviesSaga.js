import { takeEvery, delay, put, call, takeLatest } from "redux-saga/effects";

import { getMovieList } from "./getMovieListFromApi";
import { getGenres } from "./getGenres";
import { getSearchData } from "../../common/getSearchData";
import {
  fetchMovieList,
  fetchMovieListSuccess,
  fetchMovieListError,
  fetchMovieSearch,
} from "./moviesSlice";

function* fetchMovieListHandler({ payload: page }) {
  try {
    yield delay(1000);
    const movieList = yield call(getMovieList, page);
    const genreList = yield call(getGenres);
    yield put(fetchMovieListSuccess({ movieList, genreList }));
  } catch (error) {
    yield put(fetchMovieListError());
  }
}

function* fetchMovieSearchHandler({ payload: options }) {
  try {
    yield delay(1000);
    const { query, page, type } = options;
    const movieList = yield call(getSearchData, query, page, type);
    const genreList = yield call(getGenres);
    yield put(fetchMovieListSuccess({ movieList, genreList }));
  } catch (error) {
    yield put(fetchMovieListError());
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchMovieList.type, fetchMovieListHandler);
  yield takeLatest(fetchMovieSearch.type, fetchMovieSearchHandler);
}
