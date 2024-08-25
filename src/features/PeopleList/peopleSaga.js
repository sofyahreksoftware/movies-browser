import { listSaga } from "../../common/listPages/listSaga";

import { getPeopleList } from "./getPeopleListFromApi";
import { getSearchData } from "../../common/api/getSearchData";
import {
  fetch,
  fetchSearch,
  fetchSuccess,
  fetchError,
} from "./peopleListSlice";

export function* peopleSaga() {
  yield listSaga({
    getList: getPeopleList,
    getSearchData: getSearchData,
    actions: { fetch, fetchSearch, fetchSuccess, fetchError },
  });
}
