import { takeLatest, call, put, delay } from "redux-saga/effects";

export function* detailsSaga({ getDetails, getCredits, getGenres, actions }) {
  function* fetchDetailsHandler({ payload }) {
    yield delay(2000);

    try {
      const detailsData = yield call(getDetails, payload);
      const creditsData = yield call(getCredits, payload);
      const genreList = yield call(getGenres, payload);
      yield put(actions.fetchSuccess({ detailsData, creditsData, genreList }));
    } catch {
      yield put(actions.fetchError());
    }
  }

  yield takeLatest(actions.fetch.type, fetchDetailsHandler);
}
