import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { googleSignIn, register } from 'src/api/auth';
import { AuthResponse } from 'src/types/AuthResponse';

declare var google: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  name = '';
  email = '';
  password = '';
  nameError = false;
  emailError = false;
  passwordError = false;

  constructor(private router: Router, private ngZone: NgZone) {}

  async handleSubmit() {
    const { name, email, password } = this;

    if (name.trim() === '') {
      this.nameError = true;
      return;
    }

    this.nameError = false;

    if (email.trim() === '') {
      this.emailError = true;
      return;
    }

    this.emailError = false;

    if (password.trim() === '') {
      this.passwordError = true;
      return;
    }

    this.passwordError = false;

    const user: AuthResponse = await register(
      name,
      email,
      password,
    );

    if (user.errors !== undefined) {
      return;
    }

    this.ngZone.run(() => {
      localStorage.setItem('token', user.accessToken);
      this.router.navigate(['/home']);
    });

    this.name = '';
    this.email = '';
    this.password = '';
  }
}
