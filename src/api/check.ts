import { client } from "src/utils/fetchClient";

export const check = () => {
  return client.get<any>('/check');
};
