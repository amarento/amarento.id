import axios from "axios";

const createAxios = () => {
  // axios instance for making requests
  const instance = axios.create({
    baseURL: "http://localhost:3000",
  });
  return instance;
};

export const _axios = createAxios();

export const resetUserState = async () => {
  const response = await _axios.post("/api/reset-user-state");
  console.log(response);
};

export const sendInitialMessage = async () => {
  const response = await _axios.post("/api/send-initial-message");
  console.log(response);
};

export const sendReminderMessageWithQR = async (code: string) => {
  console.log("test", code);
  const response = await _axios.post("/api/send-reminder-with-qr");
  console.log(response);
  return response;
};
