import { detailsSaga } from "../../common/detailsPages/detailsSaga";

import { getPerson } from "./getPerson";
import { getPersonMovieCredits } from "./getPersonMovieCredits";
import { getGenreList } from "./getGenreList";
import { fetch, fetchSuccess, fetchError } from "./personDetailsSlice";

export function* personDetailsSaga() {
  yield detailsSaga({
    getDetails: getPerson,
    getCredits: getPersonMovieCredits,
    getGenres: getGenreList,
    actions: { fetch, fetchSuccess, fetchError },
  });
}
