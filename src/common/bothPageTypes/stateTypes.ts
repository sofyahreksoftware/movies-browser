import { StatusProp } from "./displayTypes";
import { Movie, CastCrew, GenreMap } from "./moviePersonTypes";

export interface MovieDetailsState {
  status: StatusProp;
  details: Movie;
  credits: CastCrew;
}

export interface GenresState {
  genres: GenreMap;
  status: StatusProp;
}

export interface RootState {
  movieDetails: MovieDetailsState;
  genres: GenresState;
}
