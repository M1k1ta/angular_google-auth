import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/types/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  users: User[] = [];

  constructor(
    private UsersService: UsersService,
    private router: Router,
  ) {}

  async getUsers() {
    this.users = await this.UsersService.getUsers();
  }

  ngOnInit() {
    this.getUsers();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
