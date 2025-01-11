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
export type GenreProp = string;
export type Genres = {
  [key: number]: GenreProp;
};
export type PathProp = string | undefined;
export type IdProp = string;
export type NameTitleProp = string;
export type OverviewDescriptionProp = string;
export type EntityTypeProp = "movie" | "person";

export interface Person {
  id: IdProp;
  name: NameTitleProp;
  profile_path: PathProp;
  character: CharacterProp;
  birthday: DateOfBirthProp;
  place_of_birth: PlaceOfBirthProp;
  biography: OverviewDescriptionProp;
  poster_path: PathProp;
}

export interface Movie {
  backdrop_path: PathProp;
  character: CharacterProp;
  genre_ids: number[];
  id: number;
  original_title: NameTitleProp;
  overview: OverviewDescriptionProp;
  poster_path: PathProp;
  release_date: ReleaseDateProp; // from API
  title: NameTitleProp;
  vote_average: VoteAverageProp; // from API
  vote_count: VoteAverageProp;
  production_countries: ProductionPlaces;
  genres: Genres;
}

export type Movies = Movie[];
export type People = Person[];

export type CastCrew = { cast: Movies | People; crew: Movies | People };
