export const toMovieList = () => "/movies";

export const toMovieDetails = ({ movieId } = { movieId: ":movieId" }) =>
  `/movies/${movieId}`;

export const toPeopleList = () => "/people";

export const toPersonDetails = ({ personId } = { personId: ":personId" }) => `/people/${personId}`;

export const catchAllPath = () => "*";
