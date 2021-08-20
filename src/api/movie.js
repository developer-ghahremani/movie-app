import api from ".";
import { endPoints } from "../../constant";

export const getMovies = (page = 1, rows = 10) =>
  api.get(endPoints.movie.main, {
    params: { page, rows },
  });
