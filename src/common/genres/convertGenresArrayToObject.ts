import {
  GenreMap,
  GenreId,
  GenreProp,
  Genres,
} from "../bothPageTypes/moviePersonTypes";

export const convertGenresArrayToObject = (genres: Genres) => {
  return genres.reduce(
    (
      accumularor: GenreMap,
      { id, name }: { id: GenreId; name: GenreProp }
    ) => ({
      ...accumularor,
      [id]: name,
    }),
    {} as GenreMap
  );
};
