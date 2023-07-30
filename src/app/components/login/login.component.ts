import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/api/auth';
import { check } from 'src/api/check';
import { AuthResponse } from 'src/types/AuthResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
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
    const { email, password } = this;

    this.isLoader = true;

    const user: AuthResponse = await login(
      email,
      password,
    );

    this.isLoader = false;

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

    this.email = '';
    this.password = '';
  }
}
