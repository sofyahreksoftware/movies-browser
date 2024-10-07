import { useParams } from "react-router";

import {
  fetch,
  clearOnLeave,
  selectStatus,
  selectPersonDetails,
  selectPersonMovieCredits,
} from "./personDetailsSlice";
import Details from "../../common/detailsPages/index";

export const PersonDetails = ({ genres }) => {
  const { personId } = useParams();

  return (
    <Details
      fetch={fetch}
      clearOnLeave={clearOnLeave}
      selectStatus={selectStatus}
      selectDetails={selectPersonDetails}
      selectCredits={selectPersonMovieCredits}
      id={personId}
      genres={genres}
      entityType="person"
    />
  );
};
