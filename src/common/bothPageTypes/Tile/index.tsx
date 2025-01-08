import { ReactComponent as PlaceholderPersonIcon } from "../../../assets/placeholderActorIcon.svg";
import { ReactComponent as PlaceholderMovieIcon } from "../../../assets/placeholderMovieIcon.svg";

import {
  PathProp,
  NameTitleProp,
  CharacterProp,
  ReleaseDateProp,
  ProductionPlaces,
  DateOfBirthProp,
  PlaceOfBirthProp,
  YearProp,
  Genres,
  MarkProp,
  VoteAverageProp,
  OverviewDescriptionProp,
} from "../moviePersonTypes";
import { SmallProp, DetailedProp, PersonDetailedType } from "../styledTypes";
import { Wrapper, Poster } from "./styled";
import { MetaData } from "./MetaData";
import { Description } from "./Description";

interface TileProps {
  poster?: PathProp;
  title?: NameTitleProp;
  character?: CharacterProp;
  year?: YearProp;
  releaseDate?: ReleaseDateProp;
  productionPlaces?: ProductionPlaces;
  dateOfBirth?: DateOfBirthProp;
  placeOfBirth?: PlaceOfBirthProp;
  genres?: Genres;
  mark?: MarkProp;
  votes?: VoteAverageProp;
  description?: OverviewDescriptionProp;
  $personDetailed?: PersonDetailedType;
}

export const Tile = ({
  poster,
  title,
  character,
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
}: TileProps & SmallProp & DetailedProp) => {
  const $noImage =
    !poster ||
    poster === "https://image.tmdb.org/t/p/w342/null" ||
    poster === "https://image.tmdb.org/t/p/h632/null";

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
            ($small || $personDetailed ? (
              <PlaceholderPersonIcon />
            ) : (
              <PlaceholderMovieIcon />
            ))}
        </Poster>

        <MetaData
          title={title}
          character={character}
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

        {description && <Description description={description} />}
      </Wrapper>
    </>
  );
};
