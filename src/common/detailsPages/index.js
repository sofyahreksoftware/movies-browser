import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getImageUrl } from "../../common/api/getImageUrl";

import { Page } from "../../common/bothPageTypes/Page";
import { Tile } from "../../common/bothPageTypes/Tile";
import { Article } from "../../common/bothPageTypes/Article";

function Details({
  fetch,
  clearOnLeave,
  selectStatus,
  selectDetails,
  selectCredits,
  id,
  entityType,
}) {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const details = useSelector(selectDetails);
  const credits = useSelector(selectCredits);

  useEffect(() => {
    dispatch(fetch(id));

    return () => {
      dispatch(clearOnLeave());
    };
  }, [dispatch, id]);

  return (
    <section>
      <Page status={status}>
        <Tile
          $detailed
          {...(entityType === "person" && { $personDetailed: true })}
          poster={getImageUrl({
            size: "/w342",
            path: `${details?.poster_path}`,
          })}
          title={details?.title}
          year={details?.release_date?.split("-")[0]}
          productionPlaces={details?.production_countries}
          releaseDate={details?.release_date?.split("-").reverse().join(".")}
          genres={details.genres?.map(({ name }) => name)}
          mark={details?.vote_average?.toFixed(1)}
          votes={details?.vote_count}
          description={details?.overview}
        />
        {credits.cast?.length !== 0 && (
          <Article title="Cast" people={credits.cast} />
        )}

        {credits.crew?.length !== 0 && (
          <Article title="Crew" people={credits.crew} />
        )}
      </Page>
    </section>
  );
}

export default Details;
