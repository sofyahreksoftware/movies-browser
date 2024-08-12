import { nanoid } from "@reduxjs/toolkit";

import { RatingBox } from "../RatingBox";
import { Wrapper, Title, Year, Role, Genres, Genre } from "./styled";

export const MetaData = ({
  title,
  role,
  year,
  genres,
  mark,
  votes,
  $small,
}) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    {role && <Role>{role}</Role>}
    {year && <Year> {year}</Year>}
    {genres && (
      <Genres>
        {genres.map((genre) => (
          <Genre key={nanoid()}>{genre.name}</Genre>
        ))}
      </Genres>
    )}
    <RatingBox mark={mark} votes={votes} $small={$small} />
  </Wrapper>
);
