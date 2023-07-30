import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'src/api/auth';
import { check } from 'src/api/check';
import { AuthResponse } from 'src/types/AuthResponse';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  name = '';
  email = '';
  password = '';
  nameError = '';
  emailError = '';
  passwordError = '';
  isLoader = false;

  constructor(private router: Router, private ngZone: NgZone) {}

  async ngOnInit() {
    this.isLoader = true;
    await check();
    setTimeout(() => {
      this.isLoader = false;
    }, 1000);
  }

  async handleSubmit() {
    const { name, email, password } = this;

    this.isLoader = true;

    const user: AuthResponse = await register(
      name,
      email,
      password,
    );

    this.isLoader = false;

    if (user.errors?.name) {
      this.nameError = user.errors.name;
    }

    if (user.errors?.email) {
      this.emailError = user.errors.email;
    }

    if (user.errors?.password) {
      this.passwordError = user.errors.password;
    }

    if (user.errors !== undefined) {
      return;
    }

    this.ngZone.run(() => {
      localStorage.setItem('token', user.accessToken);
      this.router.navigate(['/room']);
    });

    this.name = '';
    this.email = '';
    this.password = '';
  }
}
