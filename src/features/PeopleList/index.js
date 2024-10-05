import List from "../../common/listPages/index";

import {
  fetch,
  fetchSearch,
  selectStatus,
  selectPeopleList,
  selectResult,
  clearOnLeave,
} from "./peopleListSlice";

export const PeopleList = ({ genres }) => (
  <List
    fetch={fetch}
    fetchSearch={fetchSearch}
    selectStatus={selectStatus}
    selectList={selectPeopleList}
    selectResult={selectResult}
    clearOnLeave={clearOnLeave}
    genres={genres}
    entityName={"people"}
  />
);
