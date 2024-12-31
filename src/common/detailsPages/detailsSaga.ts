import { takeLatest, call, put, delay } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";

import { demoDelay } from "../demoDelay";
import { Movie, Person, CastCrew } from "../bothPageTypes/moviePersonTypes";

type DetailsDataType = Movie | Person;

interface Actions {
  fetch: ActionCreatorWithoutPayload;
  fetchSuccess: ActionCreatorWithPayload<{
    detailsData: DetailsDataType;
    creditsData: any[];
  }>;
  fetchError: ActionCreatorWithoutPayload;
}

interface DetailsSagaProps {
  getDetails: (id: number) => Promise<Movie | Person>;
  getCredits: (movieId: number) => Promise<CastCrew>;
  actions: Actions;
}

export function* detailsSaga({
  getDetails,
  getCredits,
  actions,
}: DetailsSagaProps) {
  function* fetchDetailsHandler({ payload }: PayloadAction<number>) {
    yield delay(demoDelay);

    try {
      const detailsData: DetailsDataType = yield call(getDetails, payload);
      const creditsData: any[] = yield call(getCredits, payload);
      yield put(actions.fetchSuccess({ detailsData, creditsData }));
    } catch {
      yield put(actions.fetchError());
    }
  }

  yield takeLatest(actions.fetch.type, fetchDetailsHandler);
}
