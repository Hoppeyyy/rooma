import axios from "axios";
import { server_api } from "../config/env.config";
import api from "../config/axios";

class ImageUtil {
  static async updatePhoto(file) {
    /* Get upload url from s3 bucket */
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
    console.log("bbbbbbbbbbbbbbbbbb");
    console.log(`${server_api}user/s3url`);
    console.log(file);

    // const uploadUrl = (await axios.get(`${server_api}user/s3url`)).data.uploadUrl;

    const uploadUrl = (
      await api({
        method: "get",
        url: "/user/s3url",
        withCredentials: true,
      })
    ).data.uploadUrl;

    console.log("cccccccccccccccccccc uploadUrl :");
    console.log(uploadUrl);
    /* Upload image to s3 */
    // const {
    //   config: { url },
    // } = await axios.put(`${uploadUrl}`, file, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });

    const {
      config: { url },
    } = await api({
      method: "put",
      url: uploadUrl,
      data: {
        file,
      },
      withCredentials: true,
    });

    console.log("url url url url");
    console.log(url);

    /* Save stored url to file user */
    const fileUrl = url.split("?")[0];
    const data = { pfp: fileUrl };
    const user = axios.put(`${server_api}user/update`, data);
    console.log("ddddddddddddddddddddddd user : ");
    console.log(user);
    return user;
  }
}

export default ImageUtil;
