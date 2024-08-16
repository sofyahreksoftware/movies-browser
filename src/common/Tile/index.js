import { Wrapper, Poster } from "./styled";
import { MetaData } from "./MetaData";
import { Description } from "./Description";
import { ReactComponent as PlaceholderIcon } from "../../assets/placeholderActorIcon.svg";

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
          {$noImage && <PlaceholderIcon />}
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
