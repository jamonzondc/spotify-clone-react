// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1/", // URL base de la API
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token"); // Si el error es 401, eliminar el token
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
