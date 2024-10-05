import List from "../../common/listPages/index";

import {
  fetch,
  fetchSearch,
  selectStatus,
  selectMovieList,
  selectResult,
  clearOnLeave,
} from "./movieListSlice";

export const MovieList = ({ genres }) => (
  <List
    fetch={fetch}
    fetchSearch={fetchSearch}
    selectStatus={selectStatus}
    selectList={selectMovieList}
    selectResult={selectResult}
    clearOnLeave={clearOnLeave}
    genres={genres}
    entityName={"movies"}
  />
);
