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
  genres,
  mark,
  votes,
  $small,
  $detailed,
}) => (
  <Wrapper $detailed={$detailed}>
    {title && (
      <Title $small={$small} $detailed={$detailed}>
        {title}
      </Title>
    )}
    {role && <Role>{role}</Role>}
    {year && <Year $detailed={$detailed}> {year}</Year>}

    <DetailedData
      productionPlaces={productionPlaces}
      releaseDate={releaseDate}
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
    />
  </Wrapper>
);
