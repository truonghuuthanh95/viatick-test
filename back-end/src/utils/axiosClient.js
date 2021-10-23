import axios from "axios";
import { ETSY_BASE_URL, X_API_KEY } from "../utils/constant";

const axiosClient = axios.create({
  baseURL: ETSY_BASE_URL,
  headers: {
    "content-type": "application/json",
    "x-api-key": X_API_KEY,
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw {
      isSuccess: false,
      status: error.response.status,
      statusText: error.response.statusText,
      data: error.response.data,
    };
  }
);

export default axiosClientEtsy;
