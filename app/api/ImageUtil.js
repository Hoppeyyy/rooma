import axios from "axios";
import { server_api } from "../config/env.config";
// import api from "../config/axios";
import api from "./axios";

class ImageUtil {
  static async getRetrievalUrl(file) {
    const uploadUrl = (await api.get("/s3url")).data.uploadUrl;

    const {
      config: { url },
    } = await api.put(uploadUrl, file, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: false,
    });

    /* Save stored url to file user */
    const fileUrl = url.split("?")[0];

    return fileUrl;
  }
}

export default ImageUtil;
