import api from ".";
import { endPoints } from "../../constant";

export const getGenre = () =>
  api.get(endPoints.genre.main, { params: { page: 1, rows: 150 } });
