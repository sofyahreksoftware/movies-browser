import { takeEvery, delay, put, call } from "redux-saga/effects";

import { getPersonDetails } from "./getPersonDetails";
import { getPersonMovieCredits } from "./getPersonMovieCredits";
import { getGenreList } from "./getGenreList";
import { fetch, fetchSuccess, fetchError } from "./personDetailsSlice";

function* fetchPersonDetailsHandler(action) {
  try {
    yield delay(1000);

    const { personId } = action.payload;

    const detailsData = yield call(getPersonDetails, personId);
    const creditsData = yield call(getPersonMovieCredits, personId);
    const genreList = yield call(getGenreList);

    yield put(
      fetchSuccess({
        detailsData,
        creditsData,
        genreList,
      })
    );
  } catch (error) {
    yield put(fetchError());
  }
}

export function* personDetailsSaga() {
  yield takeEvery(fetch.type, fetchPersonDetailsHandler);
}
