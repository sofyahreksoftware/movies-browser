import { listSaga } from "../../common/listPages/listSaga";

import { getMovieList } from "./getMovieListFromApi";
import { getGenres } from "./getGenres";
import { getSearchData } from "../../common/api/getSearchData";
import { fetch, fetchSearch, fetchSuccess, fetchError } from "./movieListSlice";

export function* moviesSaga() {
  yield listSaga({
    getList: getMovieList,
    getGenres: getGenres,
    getSearchData: getSearchData,
    actions: { fetch, fetchSearch, fetchSuccess, fetchError },
  });
}
