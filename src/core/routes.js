export const toMovieList = () => "movies";

export const toMovieDetails = ({ movieId } = { movieId: ":movieId" }) =>
  `${movieId}`;

export const toPeopleList = () => "people";

export const toPersonDetails = ({ personId } = { personId: ":personId" }) => `${personId}`;

export const catchAllPath = () => "*";
