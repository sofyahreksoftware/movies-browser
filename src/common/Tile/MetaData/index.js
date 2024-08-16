import { nanoid } from "@reduxjs/toolkit";

import { DetailedData } from "./DetailedData";
import { RatingBox } from "./RatingBox";
import { Wrapper, Title, Year, Role, Genres, Genre } from "./styled";

export const MetaData = ({
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
  $small,
  $detailed,
  $personDetailed,
}) => (
  <Wrapper $detailed={$detailed} $personDetailed={$personDetailed}>
    {title && (
      <Title
        $small={$small}
        $detailed={$detailed}
        $personDetailed={$personDetailed}
      >
        {title}
      </Title>
    )}
    {role && <Role>{role}</Role>}
    {year && <Year $detailed={$detailed}> {year}</Year>}

    <DetailedData
      productionPlaces={productionPlaces}
      releaseDate={releaseDate}
      dateOfBirth={dateOfBirth}
      placeOfBirth={placeOfBirth}
      $personDetailed={$personDetailed}
    />

    {genres && (
      <Genres $detailed={$detailed}>
        {genres.map((genre) => (
          <Genre key={nanoid()}>{genre.name}</Genre>
        ))}
      </Genres>
    )}
    <RatingBox
      mark={mark}
      votes={votes}
      $small={$small}
      $detailed={$detailed}
      $personDetailed={$personDetailed}
    />
  </Wrapper>
);
