const BASE_URL = "https://image.tmdb.org/t/p";

export const getImageUrl = ({ path, size }) => {
  return `${BASE_URL}${size}${path}`;
};
