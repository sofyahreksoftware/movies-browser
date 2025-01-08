import { StatusProp } from "./displayTypes";
import { Movie, CastCrew } from "./moviePersonTypes";

export interface MovieDetailsState {
  status: StatusProp;
  details: Movie;
  credits: CastCrew;
}

export interface RootState {
  movieDetails: MovieDetailsState;
}
