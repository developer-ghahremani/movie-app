import axios from "axios";
import { domain, localStorageKeys } from "../../constant";
import { getLocalStorage } from "../utils/localStorage";

const api = axios.create({ baseURL: `${domain}/front-end` });

api.interceptors.request.use(async (config) => {
  const header = config.headers || {};
  try {
    const token = await getLocalStorage(localStorageKeys.token);
    header.Authorization = token;
  } catch (error) {
    console.log(error.message);
  } finally {
    config.headers = header;

    return config;
  }
});

api.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    // console.log(error.response.data, "inter");
    return Promise.reject(error);
  }
);

export default api;
