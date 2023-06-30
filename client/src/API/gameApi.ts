import axios from "axios";
import { SCORE_URL, SERVER_URL, USER_URL } from "../Constants";

export const createUser = async (userName: string) => {
  return await axios.post(SERVER_URL + USER_URL, {
    userName: userName,
  });
};
export const getAllUsers = async () => {
  return await axios.get(SERVER_URL + USER_URL);
};
export const addUserScore = async (userName: string, score: number) => {
  return await axios.post(SERVER_URL + SCORE_URL, {
    userName: userName,
    score: score,
  });
};
