import { takeLatest, call, put, delay } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { Actions, DetailsDataType } from "./actionsInterface";
import { demoDelay } from "../demoDelay";
import { CastCrew } from "../bothPageTypes/moviePersonTypes";

interface DetailsSagaProps {
  getDetails: (id: number) => Promise<DetailsDataType>;
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
      const creditsData: CastCrew = yield call(getCredits, payload);
      yield put(actions.fetchSuccess({ detailsData, creditsData }));
    } catch {
      yield put(actions.fetchError());
    }
  }

  yield takeLatest(actions.fetch.type, fetchDetailsHandler);
}
