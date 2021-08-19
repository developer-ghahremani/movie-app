import axios from "axios";
import { domain } from "../../constant";

const api = axios.create({ baseURL: `${domain}/front-end` });

api.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    // console.log(error.response.data, "inter");
    return Promise.reject(error);
  }
);

export default api;
