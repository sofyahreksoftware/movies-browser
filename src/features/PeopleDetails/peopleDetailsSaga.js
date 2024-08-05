import { takeEvery, delay, put, call } from "redux-saga/effects";

import { getDataFromApi } from "../getDataFromApi";
import {
  fetchPeopleDetails,
  fetchPeopleDetailsSuccess,
  fetchPeopleDetailsError,
} from "./peopleDetailsSlice";

function* fetchPeopleDetailsHandler(action) {
  try {
    yield delay(1000);
    const { id: personId } = action.payload;
    const personDetailsApi = `https://api.themoviedb.org/3/person/${personId}?api_key=5808b0503fd4aaf8a5636df1649fe0dc`;
    const personMovieCreditsApi = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=5808b0503fd4aaf8a5636df1649fe0dc`;
    const genreListApi =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=5808b0503fd4aaf8a5636df1649fe0dc";
    const personDetails = yield call(getDataFromApi, personDetailsApi);
    const personMovieCredits = yield call(
      getDataFromApi,
      personMovieCreditsApi
    );
    const genreList = yield call(getDataFromApi, genreListApi);
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
