import { client } from "src/utils/fetchClient";

export const getUsers = () => {
  return client.get<any>('/users');
};
