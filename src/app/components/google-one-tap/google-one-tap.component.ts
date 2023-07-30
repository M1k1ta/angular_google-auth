import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { googleSignIn } from 'src/api/auth';

declare var google: any;

@Component({
  selector: 'app-google-one-tap',
  templateUrl: './google-one-tap.component.html',
  styleUrls: ['./google-one-tap.component.scss']
})
export class GoogleOneTapComponent implements OnInit {
  isLoader = false;

  constructor(private router: Router, private ngZone: NgZone) {}

  ngOnInit() {
    this.initializeGoogleOneTap();
  };

  async handleCredentialResponse(response: any) {
    this.isLoader = true;
    const user = await googleSignIn(response.credential);
    this.isLoader = false;

    this.ngZone.run(() => {
      localStorage.setItem('token', user.accessToken);
      this.router.navigate(['/home']);
    });
  };

  initializeGoogleOneTap() {
    const clientId = '248013464130-2r0ad1thlc2vm517e1e5h3btc11h9dmu.apps.googleusercontent.com';

    google.accounts.id.initialize({
      client_id: clientId,
      callback: (response: any) => this.handleCredentialResponse(response),
    });

    google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      { theme: 'outline', size: 'large', type: 'icon' }
    );

    google.accounts.id.prompt();
  };
}
