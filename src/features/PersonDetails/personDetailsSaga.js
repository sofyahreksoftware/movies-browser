import { detailsSaga } from "../../common/detailsPages/detailsSaga";

import { getPerson } from "./getPerson";
import { getPersonMovieCredits } from "./getPersonMovieCredits";
import { fetch, fetchSuccess, fetchError } from "./personDetailsSlice";

export function* personDetailsSaga() {
  yield detailsSaga({
    getDetails: getPerson,
    getCredits: getPersonMovieCredits,
    actions: { fetch, fetchSuccess, fetchError },
  });
}
