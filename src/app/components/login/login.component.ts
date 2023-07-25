import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { googleSignIn, login } from 'src/api/auth';
import { AuthResponse } from 'src/types/AuthResponse';

declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  emailError = false;
  passwordError = false;

  constructor(private router: Router, private ngZone: NgZone) {}

  async handleSubmit() {
    const { email, password } = this;

    if (email.trim() === '') {
      this.emailError = true;
      return;
    }

    if (password.trim() === '') {
      this.passwordError = true;
      return;
    }

    const user: AuthResponse = await login(
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

    this.email = '';
    this.password = '';
  }
}
