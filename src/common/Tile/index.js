import { ReactComponent as PlaceholderPersonIcon } from "../../assets/placeholderActorIcon.svg";
import { ReactComponent as PlaceholderMovieIcon } from "../../assets/placeholderMovieIcon.svg";

import { Wrapper, Poster } from "./styled";
import { MetaData } from "./MetaData";
import { Description } from "./Description";

export const Tile = ({
  poster,
  title,
  role,
  year,
  productionPlaces,
  releaseDate,
  dateOfBirth,
  placeOfBirth,
  genres,
  mark,
  votes,
  description,
  $small,
  $detailed,
  $personDetailed,
}) => {
  const $noImage = !poster || poster === "https://image.tmdb.org/t/p/w342/null";

  return (
    <>
      <Wrapper $small={$small} $detailed={$detailed}>
        <Poster
          url={!$noImage ? poster : ""}
          $noImage={$noImage}
          $small={$small}
          $detailed={$detailed}
        >
          {$noImage &&
            ($small ? <PlaceholderPersonIcon /> : <PlaceholderMovieIcon />)}
        </Poster>

        <MetaData
          title={title}
          role={role}
          year={year}
          productionPlaces={productionPlaces}
          releaseDate={releaseDate}
          dateOfBirth={dateOfBirth}
          placeOfBirth={placeOfBirth}
          genres={genres}
          mark={mark}
          votes={votes}
          $small={$small}
          $detailed={$detailed}
          $personDetailed={$personDetailed}
        />

        <Description description={description} />
      </Wrapper>
    </>
  );
};
