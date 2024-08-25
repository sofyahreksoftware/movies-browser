import { detailsSaga } from "../../common/detailsPages/detailsSaga";

import { getMovie } from "./getMovie";
import { getCredits } from "./getCredits";
import { fetch, fetchSuccess, fetchError } from "./movieDetailsSlice";

export function* movieDetailsSaga() {
  yield detailsSaga({
    getDetails: getMovie,
    getCredits: getCredits,
    actions: { fetch, fetchSuccess, fetchError },
  });
}
