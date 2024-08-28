export const convertGenresArrayToObject = (genres) => {
  return genres.reduce(
    (accumularor, { id, name }) => ({
      ...accumularor,
      [id]: name,
    }),
    {}
  );
};
