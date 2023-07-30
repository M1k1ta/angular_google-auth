import { Injectable } from '@angular/core';
import { Room } from 'src/types/Room';
import { client } from 'src/utils/fetchClient';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

  async getRoomsByEmail(email: string) {
    return await client.get<Room[]>(`/room/:${email}`);
  };
}
