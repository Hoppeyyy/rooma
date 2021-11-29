import axios from "axios";
import { server_api } from "../config/env.config";

const api = axios.create({
  baseURL: server_api,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export default api;
