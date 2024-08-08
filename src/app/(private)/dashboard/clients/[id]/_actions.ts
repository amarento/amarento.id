import { type UserMessage } from "~/server/contracts";
import { _axios } from "../../_actions";

export const getRSVPStates = async () => {
  const response = await _axios.get<UserMessage[]>("/api/user-state");
  return response.data;
};
