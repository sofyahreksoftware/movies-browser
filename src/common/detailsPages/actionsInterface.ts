import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";

import {
  CastCrew,
  IdProp,
  Movie,
  Person,
} from "../bothPageTypes/moviePersonTypes";

export type DetailsDataType = Movie | Person;

export type FetchActionType = ActionCreatorWithPayload<IdProp>;
export type ClearOnLeaveActionType = ActionCreatorWithoutPayload;

export interface Actions {
  fetch: FetchActionType;
  fetchSuccess: ActionCreatorWithPayload<{
    detailsData: DetailsDataType;
    creditsData: CastCrew;
  }>;
  fetchError: ActionCreatorWithoutPayload;
  clearOnLeave?: ClearOnLeaveActionType;
}
