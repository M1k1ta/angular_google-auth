import { Component, Input } from '@angular/core';
import { Room } from 'src/types/Room';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/types/User';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  @Input() room!: Room;
  users: User[] = [];
  isModal = false;
  isLogin = false;

  constructor(
    private UsersService: UsersService,
  ) {}

  async getUsers() {
    this.isLogin = true;
    const users = await this.UsersService.getUsersByRoomId(this.room.id);
    this.users = users;
    this.isLogin = false;
  }

  ngOnChanges() {
    this.getUsers();
  }

  onUserAdd(user: User) {
    this.users.unshift(user);
  }
}
