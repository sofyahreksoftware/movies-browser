export type XOR<T, U> = (T & Partial<U>) | (U & Partial<T>);

interface Genres {
  [key: number]: string;
}

interface Movie {
  adult: false;
  backdrop_path: string;
  character: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  order: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: string;
  vote_average: number;
  vote_count: number;
}

interface Person {
  adult: boolean;
  gender: number;
  id: number;
  credit_id: string;
  department: string;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

type Movies = Movie[];
type People = Person[];

 export interface MovieProps {
  title: string;
  movies: Movies;
  genreList: Genres;
}

export interface PeopleProps {
  title: string;
  people: People;
}


