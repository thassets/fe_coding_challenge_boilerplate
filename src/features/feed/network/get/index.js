import axios from "axios";
import { DEFAULT_USER } from "../../../../../constants";

export const getFeedDataRequest = (limit = 100, page = 0) => {
  return axios(
    `/images/search?limit=${limit}&page=${page}&order=Desc&include_vote=1&include_favourite=1&has_breeds=true`
  );
};
