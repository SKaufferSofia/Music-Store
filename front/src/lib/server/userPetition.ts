import axios from "axios";
import { BASE_URL_PUBLIC } from "../envs";

const getUser = async () => {
  const response = await axios.post(`${BASE_URL_PUBLIC}/users/register`);
};
