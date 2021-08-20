import { reduxTypes } from "../../../constant";

export const setGenres = (payload) => ({
  type: reduxTypes.genres,
  payload,
});
