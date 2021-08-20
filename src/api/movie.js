import api from ".";
import { endPoints } from "../../constant";

/**
 *
 * @param {number} page
 * @param {number} rows
 * @param {} genres  array of genre object
 * @param {} languages  array of available language
 * @param {string} title  search title
 * @returns
 */
export const getMovies = (
  page = 1,
  rows = 10,
  genres = [],
  languages,
  title
) => {
  const params = { page, rows, title };
  genres.forEach((item, index) => {
    params[`genre[${index}]`] = item.name;
  });

  languages.forEach((item, index) => {
    params[`language[${index}]`] = item;
  });

  return api.get(endPoints.movie.main, {
    params,
  });
};
