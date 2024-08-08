import { takeEvery, delay, put, call } from "redux-saga/effects";

import { getPersonDetails } from "./getPersonDetails";
import { getPersonMovieCredits } from "./getPersonMovieCredits";
import { getGenreList } from "./getGenreList";
import {
  fetchPeopleDetails,
  fetchPeopleDetailsSuccess,
  fetchPeopleDetailsError,
} from "./peopleDetailsSlice";

function* fetchPeopleDetailsHandler(action) {
  try {
    yield delay(1000);
    const { personId } = action.payload;
    const personDetails = yield call(getPersonDetails, personId);
    const personMovieCredits = yield call(getPersonMovieCredits, personId);
    const genreList = yield call(getGenreList);
    yield put(
      fetchPeopleDetailsSuccess({
        personDetails,
        personMovieCredits,
        genreList,
      })
    );
  } catch (error) {
    yield put(fetchPeopleDetailsError());
  }
}

export function* peopleDetailsSaga() {
  yield takeEvery(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
}
