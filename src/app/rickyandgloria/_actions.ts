import axios from "axios";

const createAxios = () => {
  // axios instance for making requests
  const instance = axios.create({
    baseURL: "http://localhost:3000",
  });
  return instance;
};

const _axios = createAxios();
export const resetUserState = async () => {
  const response = await _axios.post("/api/reset-user-state");
  console.log(response);
};

export const sendInitialMessage = async () => {
  const response = await _axios.post("/api/send-initial-message");
  console.log(response);
};
