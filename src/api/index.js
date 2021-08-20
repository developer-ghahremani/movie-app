import axios from "axios";
import { domain, localStorageKeys } from "../../constant";
import { getLocalStorage } from "../utils/localStorage";
import { showMessage } from "../utils/toast";

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
    console.log(
      `${config.method}, ${config.url}, ${JSON.stringify(config.params)}`
    );
    return config;
  }
});

api.interceptors.response.use((response) => {
  if (response.data.status !== 200) {
    showMessage(response.data.message, "error");
    return Promise.reject(Error(response.data.message));
  }
  return Promise.resolve(response);
});

export default api;
