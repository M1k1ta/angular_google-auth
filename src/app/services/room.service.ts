import { Injectable } from '@angular/core';
import { Room } from 'src/types/Room';
import { client } from 'src/utils/fetchClient';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  async getRoomById(email: string, roomId: number) {
    return await client.post<Room>('/room/roomId', { email, roomId });
  };

  async getUsersByRoomId(roomId: number) {
    return await client.get<any>(`/users/${roomId}`);
  };
}
