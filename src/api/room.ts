import { User } from "../types/User";
import { Room } from "src/types/Room";
import { getAuthUser } from "src/utils/authUser";
import { client } from "src/utils/fetchClient";

export const getRoomsByEmail = (email: string) => {
  return client.get<Room[]>(`/room/${email}`);
};

export const createRoom = (name: string, autorEmail: string) => {
  return client.post<Room>('/room/create', { name, autorEmail });
};

export const deleteRoom = (roomId: number) => {
  return client.delete<Room>(`/room/${roomId}`);
};

export const addUserToRoom = (email: string, roomId: number, roomName: string) => {
  const user = getAuthUser();
  const userEmail = user.email;
  return client.post<User>('/room/add-user', { email, roomId, userEmail, roomName });
};

export const removeUserFromRoom = (email: string, roomId: number) => {
  return client.post<User>('/room/remove-user', { email, roomId });
};
