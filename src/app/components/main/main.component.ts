import { Component, Input } from '@angular/core';
import { Room } from 'src/types/Room';
import { RoomService } from 'src/app/services/room.service';
import { getAuthUser } from 'src/utils/authUser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @Input() isLoader!: boolean;
  @Input() rooms!: Room[];

  selectedRoom: Room | null = null;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      const roomId = parseInt(params.get('roomId') || '', 10);

      if (!roomId) {
        this.selectedRoom = null;
        return;
      }

      const user = getAuthUser();
      const email: string = user.email;
      const room = await this.roomService.getRoomById(email, roomId);

      if (!!room.errors?.status) {
        return;
      }

      this.selectedRoom = room;
    });
  }
}
