export type XOR<T, U> = (T & Partial<U>) | (U & Partial<T>);

export type ReleaseDateProp = string | undefined;
export type DateOfBirthProp = string | undefined;
export type PlaceOfBirthProp = string | undefined;
export type ProductionPlace = { index: number; name: string };
export type ProductionPlaces = ProductionPlace[] | undefined;
export type CharacterProp = string | undefined;
export type YearProp = string | undefined;
export type MarkProp = number | undefined;
export type VoteAverageProp = number | undefined;
export type GenreProp = string | undefined;
export type Genres = {
  [key: number]: GenreProp | undefined;
};
export type PathProp = string;
export type IdProp = string;
export type NameTitleProp = string;
export type OverviewProp = string;

export interface CastMember {
  adult: boolean;
  gender: number | null; // Możliwe wartości: 0, 1, 2, lub null
  id: number;
  known_for_department: string;
  name: NameTitleProp;
  original_name: NameTitleProp;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  order?: number;
  cast_id?: number; // Nie zawsze występuje
  character?: string; // Tylko dla obsady
}

export interface CrewMember
  extends Omit<CastMember, "cast_id" | "character" | "order"> {
  department: string;
  job: string;
}

export interface Movie {
  backdrop_path: PathProp;
  character: CharacterProp;
  genre_ids: number[];
  id: IdProp;
  original_title: NameTitleProp;
  overview: OverviewProp;
  poster_path: PathProp;
  release_date: ReleaseDateProp; // from API
  releaseDate: ReleaseDateProp; // optional alias for vote_average
  year: YearProp;
  title: NameTitleProp;
  vote_average: VoteAverageProp; // from API
  mark?: MarkProp; // optional alias for vote_average
  vote_count: VoteAverageProp;
  votes: VoteAverageProp;
  productionPlaces: ProductionPlaces;
  genres: Genres;
}

export interface Person {
  id: IdProp;
  job: string;
  name: NameTitleProp;
  profile_path: PathProp;
  character: CharacterProp;
  dateOfBirth: DateOfBirthProp;
  placeOfBirth: PlaceOfBirthProp;
}

export type Movies = Movie[];
export type People = Person[];
export type CastCrew = { cast: CastMember[]; crew: CrewMember[] };

export interface MovieProps {
  title?: NameTitleProp;
  movies: Movies;
  genreList: Genres;
}

export interface PeopleProps {
  title?: NameTitleProp;
  people: People;
}
