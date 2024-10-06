import Details from "../../common/detailsPages/index";

import { useParams } from "react-router";

import {
  fetch,
  clearOnLeave,
  selectStatus,
  selectMovieDetails,
  selectCredits,
} from "./movieDetailsSlice";

export const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <Details
      fetch={fetch}
      clearOnLeave={clearOnLeave}
      selectStatus={selectStatus}
      selectDetails={selectMovieDetails}
      selectCredits={selectCredits}
      id={movieId}
      entityType="movie"
    />
  );
};
