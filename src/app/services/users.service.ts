import { Injectable } from '@angular/core';
import { User } from 'src/types/User';
import { client } from 'src/utils/fetchClient';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  async getUsers() {
    return await client.get<User[]>('/users');
  }
}
