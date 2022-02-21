import axios from "axios";
import { config } from "../config/config";

const getUserInfoByEmail = async (email: string) => {
  const { data } = await axios({
    baseURL: config.baseURL,
    url: "/getUserInfo/byEmail",
    params: {
      email,
    },
  });
  return data;
};

export const user = {
  get: {
    byEmail: getUserInfoByEmail,
  },
};
