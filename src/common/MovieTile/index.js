import { nanoid } from "@reduxjs/toolkit";
import { ReactComponent as PlaceholderIcon } from "../../assets/placeholderMovieIcon.svg";
import { ImagePlaceholder } from "../ImagePlaceholder/styled";
import {
  StyledMovieTile,
  Image,
  DataContainer,
  Title,
  StyledInfo,
  Container,
  AdditionalDataName,
  AdditionalData,
  Genres,
  Genre,
  VotesContainer,
  StyledStarIcon,
  VotesNumber,
  Mark,
  MaxMark,
  Description,
  Description2,
} from "./styled";

export const MovieTile = ({
  poster,
  title,
  year,
  productionPlaces,
  releaseDate,
  genres,
  mark,
  votes,
  description,
  character,
  job,
  $main,
}) => (
  <>
    <StyledMovieTile $main={$main}>
      {poster !== "https://image.tmdb.org/t/p/w342/null" ? (
        <Image $main={$main} src={poster} alt="Movie Poster" />
      ) : (
        <ImagePlaceholder $main={$main}>
          <PlaceholderIcon />
        </ImagePlaceholder>
      )}
      <DataContainer $main={$main}>
        {title && <Title $main={$main}>{title}</Title>}
        {character || job ? (
          <StyledInfo>
            {character && <span>{character}</span>}
            {job && <span>{job}</span>}
            {year && <span> ({year})</span>}
          </StyledInfo>
        ) : (
          year && <StyledInfo $main={$main}>{year}</StyledInfo>
        )}
        {productionPlaces && (
          <Container>
            <AdditionalDataName>Production:</AdditionalDataName>{" "}
            {productionPlaces?.map((productionPlace, index) => (
              <AdditionalData key={index}>
                {productionPlace.name}
                {index === productionPlaces.length - 1 ? "." : ", "}
              </AdditionalData>
            ))}
          </Container>
        )}
        {releaseDate && (
          <Container>
            <AdditionalDataName>Release date:</AdditionalDataName>{" "}
            <AdditionalData>{releaseDate}</AdditionalData>
          </Container>
        )}
        {genres && (
          <Genres $main={$main}>
            {genres.map((genre) => (
              <Genre key={nanoid()}>{genre.name}</Genre>
            ))}
          </Genres>
        )}
        <VotesContainer>
          <StyledStarIcon />
          <Mark $main={$main}>{mark}</Mark>
          <MaxMark $main={$main}>/10</MaxMark>
          <VotesNumber $main={$main}>
            {votes ? `${votes} vote${votes === 1 ? "" : "s"}` : "No votes yet"}
          </VotesNumber>
        </VotesContainer>
        {description && <Description>{description}</Description>}
      </DataContainer>
    </StyledMovieTile>
    {description && <Description2>{description}</Description2>}
  </>
);
