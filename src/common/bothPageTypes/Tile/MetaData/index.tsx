import { nanoid } from "@reduxjs/toolkit";

import { DetailedData } from "./DetailedData";
import { RatingBox } from "./RatingBox";
import { Wrapper, Title, Year, Role, Genres, Genre } from "./styled";

import {
  SmallProp,
  DetailedProp,
  PersonDetailedProp,
  BackdropProp,
} from "../styledTypes";

import { Movie, Person } from "../../Article/types";

type MetaDataProps = SmallProp &
  DetailedProp &
  PersonDetailedProp &
  BackdropProp &
  Movie &
  Person;

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
}: MetaDataProps) => (
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
        {genres?.map((genre: string) => (
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
