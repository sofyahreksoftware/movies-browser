import { takeEvery, delay, put, call, takeLatest } from "redux-saga/effects";

import { getPeopleList } from "./getPeopleListFromApi";
import { getSearchData } from "../../common/api/getSearchData";
import { fetch, fetchSearch, fetchSuccess, fetchError } from "./peopleSlice";

function* fetchPeopleListHandler({ payload: page }) {
  try {
    yield delay(1000);
    const data = yield call(getPeopleList, page);
    yield put(fetchSuccess({ data }));
  } catch (error) {
    yield put(fetchError());
  }
}

function* fetchPeopleSearchHandler({ payload: options }) {
  try {
    yield delay(1000);
    const { query, page, type } = options;
    const data = yield call(getSearchData, query, page, type);
    yield put(fetchSuccess({ data }));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* peopleSaga() {
  yield takeEvery(fetch.type, fetchPeopleListHandler);
  yield takeLatest(fetchSearch.type, fetchPeopleSearchHandler);
}
