export const buildQueryString = (parameters, initialQueryString) => {
  const urlSearchParams = new URLSearchParams(initialQueryString);

  for (const key in parameters) {
    const value = parameters[key];

    if (value) {
      urlSearchParams.set(key, value);
    } else {
      urlSearchParams.delete(key);
    }
  }

  return urlSearchParams.toString();
};
