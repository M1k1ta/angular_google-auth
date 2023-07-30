import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { createRoom } from 'src/api/room';
import { getAuthUser } from 'src/utils/authUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() createRoomEvent = new EventEmitter();

  roomName = '';
  error = '';

  constructor(
    private router: Router,
  ) {}

  async handleSubmit() {
    if (!this.roomName.trim()) {
      this.error = 'Room name is required'

      return;
    }

    const user = getAuthUser();

    const room = await createRoom(this.roomName, user.email);
    this.roomName = '';
    this.createRoomEvent.emit(room);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
