import axios from "axios";

export const server_url =
  process.env.NODE_ENV === "production"
    ? "https://api.rooma.ca/"
    : "http://localhost:8080/";

const axiosInstance = axios.create({
  baseURL: `${server_url}v1/`,
  timeout: 7000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
