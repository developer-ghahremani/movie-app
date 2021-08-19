import api from ".";
import { endPoints } from "../../constant";

export const loginUser = ({ username, password }) =>
  api.post(endPoints.auth.login, { username, password });
