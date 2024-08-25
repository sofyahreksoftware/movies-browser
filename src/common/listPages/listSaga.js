import { takeLatest, call, put, delay } from "redux-saga/effects";

export function* listSaga({ getList, getGenres, getSearchData, actions }) {
  function* fetchListHandler({ payload: page }) {
    yield delay(1000);

    try {
      const data = yield call(getList, page);
      const genreList = getGenres ? yield call(getGenres) : null;

      yield put(actions.fetchSuccess({ data, genreList }));
    } catch {
      yield put(actions.fetchError());
    }
  }

  function* fetchSearchHandler({ payload: options }) {
    yield delay(1000);

    try {
      const { query, page, type } = options;

      const data = yield call(getSearchData, query, page, type);
      const genreList = getGenres ? yield call(getGenres) : null;
      yield put(actions.fetchSuccess({ data, genreList }));
    } catch (error) {
      yield put(actions.fetchError());
    }
  }

  yield takeLatest(actions.fetch.type, fetchListHandler);
  yield takeLatest(actions.fetchSearch.type, fetchSearchHandler);
}
