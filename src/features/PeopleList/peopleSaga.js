import { takeEvery, delay, put, call, takeLatest } from "redux-saga/effects";

import { getPeopleList } from "./getPeopleListFromApi";
import { getSearchData } from "../../common/api/getSearchData";
import {
  fetchPeopleList,
  fetchPeopleListSuccess,
  fetchPeopleListError,
  fetchPeopleSearch,
} from "./peopleSlice";

function* fetchPeopleListHandler({ payload: page }) {
  try {
    yield delay(1000);
    const peopleList = yield call(getPeopleList, page);
    yield put(fetchPeopleListSuccess(peopleList));
  } catch (error) {
    yield put(fetchPeopleListError());
  }
}

function* fetchPeopleSearchHandler({ payload: options }) {
  try {
    yield delay(1000);
    const { query, page, type } = options;
    const peopleList = yield call(getSearchData, query, page, type);
    yield put(fetchPeopleListSuccess(peopleList));
  } catch (error) {
    yield put(fetchPeopleListError());
  }
}

export function* peopleSaga() {
  yield takeEvery(fetchPeopleList.type, fetchPeopleListHandler);
  yield takeLatest(fetchPeopleSearch.type, fetchPeopleSearchHandler);
}
