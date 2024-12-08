import { nanoid } from "@reduxjs/toolkit";

import { DetailedData } from "./DetailedData";
import { RatingBox } from "./RatingBox";
import { Wrapper, Title, Year, Role, Genres, Genre } from "./styled";

import {
  SmallProp,
  DetailedProp,
  PersonDetailedProp,
  BackdropProp,
} from "../../styledTypes";

import {
  NameTitleProp,
  CharacterProp,
  ReleaseDateProp,
  ProductionPlaces,
  DateOfBirthProp,
  PlaceOfBirthProp,
  YearProp,
  Genres as GenreProps, //to avoid conflict with Genres Styled Component
  MarkProp,
  VoteAverageProp,
} from "../../moviePersonTypes";

interface MetaDataProps {
  title: NameTitleProp;
  character: CharacterProp;
  year: YearProp;
  productionPlaces?: ProductionPlaces;
  releaseDate: ReleaseDateProp;
  dateOfBirth: DateOfBirthProp;
  placeOfBirth: PlaceOfBirthProp;
  genres?: GenreProps;
  mark?: MarkProp;
  votes?: VoteAverageProp;
}

export const MetaData = ({
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
  $small,
  $detailed,
  $personDetailed,
  $backdrop,
}: MetaDataProps &
  SmallProp &
  DetailedProp &
  PersonDetailedProp &
  BackdropProp) => (
  <Wrapper
    $detailed={$detailed}
    $personDetailed={$personDetailed}
    $backdrop={$backdrop}
  >
    {title && (
      <Title
        as={$personDetailed || $backdrop ? "h1" : undefined}
        $small={$small}
        $detailed={$detailed}
        $personDetailed={$personDetailed}
        $backdrop={$backdrop}
      >
        {title}
      </Title>
    )}
    {character && <Role>{character}</Role>}
    {year && <Year $detailed={$detailed}> {year}</Year>}
    <DetailedData
      productionPlaces={productionPlaces}
      releaseDate={releaseDate}
      dateOfBirth={dateOfBirth}
      placeOfBirth={placeOfBirth}
      $personDetailed={$personDetailed}
    />

    {Array.isArray(genres) && genres.length > 0 && (
      <Genres $detailed={$detailed}>
        {genres.map((genre: string) => (
          <Genre key={nanoid()}>{genre}</Genre>
        ))}
      </Genres>
    )}
    <RatingBox
      mark={mark}
      votes={votes}
      $small={$small}
      $detailed={$detailed}
      $personDetailed={$personDetailed}
      $backdrop={$backdrop}
    />
  </Wrapper>
);
