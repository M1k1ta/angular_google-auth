import { Component, EventEmitter, Input, Output } from '@angular/core';
import { addUserToRoom } from 'src/api/room';
import { Room } from 'src/types/Room';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output() delete = new EventEmitter();
  @Output() onUserAdd = new EventEmitter();

  @Input() room!: Room;

  isLoader = false;
  email = '';
  emailError = '';

  async handleSubmit() {
    const { email, room } = this;

    this.isLoader = true;
    const user = await addUserToRoom(email, room.id, room.name);
    this.isLoader = false;

    if (user.status === 'Fail') {
      console.log('Fail')
      return;
    }

    if (user.errors?.email) {
      this.emailError = user.errors.email;

      return;
    }

    if (user.status !== 'NOT') {
      this.onUserAdd.emit(user);
    }

    this.email = '';
    this.delete.emit();
  }
}
