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
  $backdrop,
}) => (
  <Wrapper
    $detailed={$detailed}
    $personDetailed={$personDetailed}
    $backdrop={$backdrop}
  >
    {title && (
      <Title
        as={($personDetailed || $backdrop) && "h1"}
        $small={$small}
        $detailed={$detailed}
        $personDetailed={$personDetailed}
        $backdrop={$backdrop}
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
        {genres?.map((genre) => (
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
