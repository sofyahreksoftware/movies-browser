export type XOR<T, U> = (T & Partial<U>) | (U & Partial<T>);

interface Genres {
  [key: number]: string;
}

export interface Movie {
  backdrop_path: string;
  character: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string; // from API
  releaseDate: string; // optional alias for vote_average
  year: number;
  title: string;
  vote_average: number; // from API
  mark?: number; // optional alias for vote_average
  vote_count: number;
  votes: number;
  productionPlaces: string;
  genres: Genres;
}

export interface Person {
  id: string;
  job: string;
  profile_path: string;
  character: string;
  dateOfBirth: string;
  placeOfBirth: string;
}

type Movies = Movie[];
type People = Person[];

export interface MovieProps {
  title?: string;
  movies: Movies;
  genreList: Genres;
}

export interface PeopleProps {
  title?: string;
  people: People;
}
