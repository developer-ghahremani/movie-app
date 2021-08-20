import { reduxTypes } from "../../../constant";

const initialState = [];

export const genres = (state = initialState, { type, payload }) => {
  switch (type) {
    case reduxTypes.genres:
      return payload;

    default:
      return state;
  }
};
