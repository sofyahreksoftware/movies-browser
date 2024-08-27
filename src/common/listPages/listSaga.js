import {takeLatest, call, put, delay} from "redux-saga/effects";

import { demoDelay } from "../demoDelay";

export function* listSaga({getList, getSearchData, actions}) {
    function* fetchListHandler({payload: page}) {
        yield delay(demoDelay);

        try {
            const data = yield call(getList, page);
            yield put(actions.fetchSuccess({data}));
        } catch {
            yield put(actions.fetchError());
        }
    }

    function* fetchSearchHandler({payload: options}) {
        yield delay(1000);

        try {
            const {query, page, type} = options;

            const data = yield call(getSearchData, query, page, type);
            yield put(actions.fetchSuccess({data}));
        } catch (error) {
            yield put(actions.fetchError());
        }
    }

    yield takeLatest(actions.fetch.type, fetchListHandler);
    yield takeLatest(actions.fetchSearch.type, fetchSearchHandler);
}
