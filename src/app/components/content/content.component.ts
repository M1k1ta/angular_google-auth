import { Component } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Room } from 'src/types/Room';
import { getAuthUser } from 'src/utils/authUser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  rooms: Room[] = [];
  isLoader = false;

  constructor(
    private roomsService: RoomsService,
  ) {}

  async getRooms() {
    const user = getAuthUser();
    this.isLoader = true;
    this.rooms = await this.roomsService.getRoomsByEmail(user.email);
    this.isLoader = false;
  }

  ngOnInit() {
    this.getRooms();
  }

  onRoomCreated(room: Room) {
    this.rooms.unshift(room);
  }
}
