import { takeEvery, delay, put, call, takeLatest } from "redux-saga/effects";

import {
  fetchPeopleList,
  fetchPeopleListSuccess,
  fetchPeopleListError,
  fetchPeopleSearch,
} from "./peopleSlice";
import { getPeopleListFromApi } from "./getPeopleListFromApi";
import { getSearchData } from "../../Navigation/Search/getSearchData";

function* fetchPeopleListHandler({ payload: page }) {
  try {
    yield delay(1000);
    const peopleList = yield call(getPeopleListFromApi, page);
    yield put(fetchPeopleListSuccess(peopleList));
  } catch (error) {
    yield put(fetchPeopleListError());
  }
}

function* fetchPeopleSearchHandler({ payload: options }) {
  try {
    yield delay(1000);
    const peopleList = yield call(
      getSearchData,
      options.query,
      options.page,
      options.type
    );
    yield put(fetchPeopleListSuccess(peopleList));
  } catch (error) {
    yield put(fetchPeopleListError());
  }
}

export function* peopleSaga() {
  yield takeEvery(fetchPeopleList.type, fetchPeopleListHandler);
  yield takeLatest(fetchPeopleSearch.type, fetchPeopleSearchHandler);
}
