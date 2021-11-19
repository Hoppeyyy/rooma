import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8080/v1",
//   timeout: 3000,
//   headers: {
//     "Content-Type": "application/json",
//     accept: "application/json",
//     "Access-Control-Allow-Origin": "https://rooma.ca",
//   },
// });

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/v1",
  timeout: 7000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
