import {takeLatest, call, put, delay} from "redux-saga/effects";

import { demoDelay } from "../demoDelay";

// interface DetailsSagaProps{getDetails: }
export function* detailsSaga({getDetails, getCredits, actions}) {
    function* fetchDetailsHandler({payload}) {
        yield delay(demoDelay);

        try {
            const detailsData = yield call(getDetails, payload);
            const creditsData = yield call(getCredits, payload);
            yield put(actions.fetchSuccess({detailsData, creditsData}));
        } catch {
            yield put(actions.fetchError());
        }
    }

    yield takeLatest(actions.fetch.type, fetchDetailsHandler);
}
